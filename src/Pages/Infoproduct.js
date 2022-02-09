import React from 'react';
import Productinfo from '../components/InProduct/Productinfo';
import { Link } from 'react-router-dom';

export default function Infoproduct() {
  return <div>
      <Link to='/Productinfo'>
      <Productinfo />
      </Link>
  </div>;
}
