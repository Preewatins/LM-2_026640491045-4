import { useState } from 'react';
import { cards } from './data'; 
import { useNavigate } from '@remix-run/react';


function Profile({ nam , }: 
    { nam: string, bgp: string ,email: any, tel: number,  imgu: string, usrn: string, cdat: string,}
  ) {
    const navigate = useNavigate();