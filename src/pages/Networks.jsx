import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ScientificGlobal from './networks/ScientificGlobal'
import RegionalCommercialization from './networks/RegionalCommercialization'

function Networks() {
  return (
    <div>
      Networks
      <Routes>
        <Route path='scientific-global' element={<ScientificGlobal />} />
        <Route path='regional-commercialization' element={<RegionalCommercialization />} />
      </Routes>
    </div>
  )
}

export default Networks