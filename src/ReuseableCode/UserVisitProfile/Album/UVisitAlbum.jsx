import { logDOM } from '@testing-library/react';
import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import UVAlbum from '../Album/UVAlbum'


const UVisitAlbum = () => {
  return (
    <div>
        <UVAlbum />
    </div>
  )
}

export default UVisitAlbum