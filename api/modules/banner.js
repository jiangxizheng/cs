import http from "../index";

export const getBanner = () => {
  return http.get('/banner')
}