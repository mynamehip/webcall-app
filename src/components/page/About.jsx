import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getCallInfo } from '../../actions/data';
import { makeCall } from '../../session/JsSIP-session';
import { paging } from '../../helpers/paging';

import PagingButton from '../features/table/PagingButton';
import Table from '../features/table/Table';
import Select from '../base/Select';
import LoadingScreen from '../base/LoadingScreen';

const About = () => {
  const user = useSelector((state) => state.authState.user);
  const dispatch = useDispatch();

  const [callData, setCallData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordPerPage, setRecordPerPage] = useState(10);
  const [isLoading, setLoading] = useState(false);

  const selectList = [10, 20, 50, 100, 200, 500, 1000];
  const header = [
    'Đầu số',
    'Số điện thoại',
    'Trạng thái',
    'Loại',
    'Thời lượng',
    'Thời gian',
    'Ghi âm',
  ];
  var tableData = [];
  var pageData = callData ? paging(callData, currentPage, recordPerPage) : null;
  if (callData) {
    tableData = pageData.items.map((item) => ({
      did: item.did,
      phone: item.phone,
      disposition: item.disposition,
      calltype: item.calltype,
      duration: item.duration,
      calldate: item.calldate,
      audio: item.recordingfile,
    }));
  }
  const test = (value) => {
    makeCall(dispatch, value);
  };
  const special = [
    { index: 1, type: 'button', callback: test },
    { index: 6, type: 'audio' },
  ];

  useEffect(() => {
    setLoading(true);
    const loadCallData = async () => {
      try {
        const res = await getCallInfo(user.username);
        setCallData(res.data);
      } catch (error) {
        console.error('Error fetching call data:', error);
        setCallData([]);
      } finally {
        setLoading(false);
      }
    };
    loadCallData();
  }, [user, recordPerPage]);

  const handleChange = (value) => {
    setCurrentPage(value);
  };

  return (
    <div className=" dark:text-darkMain flex flex-col relative">
      <div className=" text-[3.5rem] leading-[3.5rem] font-bold text-main dark:text-darkSecond mb-[3rem] select-none">
        Lịch sử cuộc gọi
      </div>
      <div className=" mb-[1.5rem]">
        {isLoading ? (
          <LoadingScreen size={6} color={'main'}></LoadingScreen>
        ) : (
          <Table header={header} data={tableData} special={special}></Table>
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
            totalPages={callData ? pageData.totalPages : 1}
            currentPage={currentPage}
            onPageChange={handleChange}></PagingButton>
        </div>
      </div>
    </div>
  );
};

export default About;
