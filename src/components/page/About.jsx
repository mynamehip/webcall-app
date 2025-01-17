import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { getCallInfo } from '../../actions/data';

import PagingButton from '../features/table/PagingButton';
import Table from '../features/table/Table';
import Select from '../base/Select';
import LoadingScreen from '../base/LoadingScreen';

const About = () => {
  const user = useSelector((state) => state.authState.user);

  const [callData, setCallData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordPerPage, setRecordPerPage] = useState(10);
  const [isLoading, setLoading] = useState(false);

  const selectList = [10, 20, 50, 100, 200, 500, 1000];
  const header = ['DID', 'Disposition', 'Duration', 'Exten'];
  var tableData = [];
  if (callData) {
    var dataByNumber = callData.slice(0, recordPerPage);
    tableData = dataByNumber.map((item) => ({
      did: item.did,
      disposition: item.disposition,
      duration: item.duration,
      exten: item.exten,
    }));
  }

  useEffect(() => {
    setLoading(true);
    const loadCallData = async () => {
      try {
        const res = await getCallInfo(user.username);
        console.log(res);
        setCallData(res.data);
      } catch (error) {
        console.error('Error fetching call data:', error);
        setCallData([]);
      } finally {
        setLoading(false);
      }
    };
    loadCallData();
  }, [user]);

  const handleChange = (value) => {
    setCurrentPage(value);
  };

  return (
    <div className=" dark:text-darkMain flex flex-col">
      <div className=" text-[3.5rem] leading-[3.5rem] font-bold text-main dark:text-darkSecond mb-[3rem] select-none">
        Lịch sử cuộc gọi
      </div>
      <div className=" mb-[1.5rem]">
        {isLoading ? (
          <LoadingScreen size={6} color={'main'}></LoadingScreen>
        ) : (
          <Table header={header} data={tableData}></Table>
        )}
      </div>
      <div
        className={` flex flex-col gap-[2rem] md:flex-row justify-between ${
          tableData.length === 0 ? 'hidden' : ''
        }`}>
        <div className="flex items-center">
          <div className=" text-[1.5rem] px-[1rem]">Số bản ghi trên 1 trang</div>
          <div className=" w-[6rem]">
            <Select
              size={1.5}
              value={recordPerPage}
              data={selectList}
              onSelect={setRecordPerPage}></Select>
          </div>
        </div>
        <div>
          <PagingButton
            totalPages={10}
            currentPage={currentPage}
            onPageChange={handleChange}></PagingButton>
        </div>
      </div>
    </div>
  );
};

export default About;
