import { useNavigate } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import { goToLogin } from '../Routes/coordinator'

const useProtectedPage = () => {
  const navigate = useNavigate()
  useLayoutEffect(() => {
    const token = localStorage.getItem('token')
    if (!token){
      goToLogin(navigate)
    }
  }, [navigate])
}

export default useProtectedPage
