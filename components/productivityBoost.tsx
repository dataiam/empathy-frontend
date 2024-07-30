import React from 'react'
import Link from 'next/link';

const ProductivityBoost = () => {
  return (
    <div className="productivity-wrapper white-wrapper radius-16">
        <h3 className="title">Productivity Boost</h3>
        <h4 className="count-title">11x<span aria-hidden="true" className="ico icon-arrow-warm-up"></span></h4>
        <p className="info">faster with Data I Am</p>
        <Link href="#" className="btn btn-grey-outline radius-23 sm font-600"><span aria-hidden="true" className="ico icon-info-circle"></span>Learn how we calculate this</Link>
    </div>
  )
}

export default ProductivityBoost;