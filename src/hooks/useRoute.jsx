import React from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'

export default function useRoute() {

  const navigate = useNavigate();
  const params = useParams();
  const [search,setSearch] = useSearchParams();


  return {navigate,params, searchParams: [search,setSearch]};
}
