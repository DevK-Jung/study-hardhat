// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const JAN_1ST_2030 = 1893456000; // 기본 잠금해제 타임스탬프 2023년 1월 1일
const ONE_GWEI = 1_000_000_000n; // 1 Gwei 설정

module.exports = buildModule("LockModule", (m) => { // 모듈 이름 "LockModule" 로 설정
  // 파라미터 세팅
  const unlockTime = m.getParameter("unlockTime", JAN_1ST_2030);
  const lockedAmount = m.getParameter("lockedAmount", ONE_GWEI);

  // 스마트 컨트랙트 배포후 인스턴스 반환
  const lock = m.contract("Lock", [unlockTime], {
    value: lockedAmount,
  });

  return { lock };
});
