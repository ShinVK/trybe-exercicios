export const REQUEST_DATA = 'REQUEST_DATA';
export const GET_DATA = 'GET_DATA';
export const FAILED_REQUEST = 'FAILED_REQUEST';
e

const reqData = () => ({
  type: REQUEST_DATA,
})

const getData = (data) => ({
  type: GET_DATA,
  data,
})

const failedReq = (error) => ({
  type: FAILED_REQUEST,
  data,
})

