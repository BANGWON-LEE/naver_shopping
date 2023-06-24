import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [guestId, setGuestId] = useState<string>('');
  const [guestPw, setGuestPw] = useState<string>('');

  type GuestType = {
    id: string;
    pw: string;
  };

  const guest: GuestType[] = [
    {
      id: 'guest1',
      pw: '12345678',
    },
    {
      id: 'guest2',
      pw: '1234567',
    },
  ];

  const navigate = useNavigate();

  const submitLogin = () => {
    const checkId = guest.filter(
      (el: GuestType) => el.id === guestId && el.pw === guestPw
    );

    if (checkId.length === 0) {
      alert('로그인 실패');
    } else {
      alert('로그인 성공');
      navigate('/main');
    }
  };

  return (
    <div className="h-auto w-full bg-[#FFFFFF] py-60 sm:h-full sm:w-screen">
      <div className="mx-auto w-11/12 sm:grid sm:w-full">
        <div className="mx-auto my-0 h-[30rem] w-[40rem] rounded-lg border-4 border-[#00A500]  bg-[#FFFFFF] py-[4rem]">
          <div className="mx-auto my-0 text-[#7e7b7b]">
            <div className="mx-auto w-fit py-8">
              <h2 className="text-[1.5rem] font-bold">Login</h2>
            </div>
            <div className="mx-auto mb-8 w-fit text-center">
              <div className="w-3/5">
                <p className="mb-2 pl-2 text-left font-bold ">
                  사용자 아이디 입력 :
                </p>
              </div>
              <input
                type="text"
                onChange={(event) => setGuestId(event.target.value)}
                className="mx-auto my-0 w-[23rem] rounded-lg border-4 border-[#53FF4C] pl-3 text-lg font-semibold text-[#000000]"
              />
            </div>
            <div className="mx-auto w-fit text-center">
              <div className="w-3/5">
                <p className="mb-2 pl-2 text-left font-bold ">
                  사용자 비밀번호 입력 :
                </p>
              </div>
              <input
                type="password"
                onChange={(event) => setGuestPw(event.target.value)}
                className="mx-auto my-0 w-[23rem] rounded-lg border-4 border-[#53FF4C] pl-3 text-lg font-semibold text-[#000000]"
              />
            </div>
            <div className="mx-auto mt-6 w-fit text-center">
              <button
                className="rounded-lg border-2 bg-[#FFFFFF] px-11 py-2 font-bold"
                type="button"
                onClick={() => submitLogin()}
              >
                검색
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
