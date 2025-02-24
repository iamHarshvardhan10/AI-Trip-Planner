const API_POINT = import.meta.env.VITE_API_ENDPONTS



export const SEND_OTP = `${API_POINT}/api/v1/auth/sendOTP`
export const REGISTER = `${API_POINT}/api/v1/auth/register`
export const LOGIN = `${API_POINT}/api/v1/auth/login`