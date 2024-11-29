import React from 'react'
import './css/Career.css'
import { Contacts } from '../components'

const Career = () => {
  return (
    <>
        <div className="container">
            <h1 className="title page-title">Current vacancies</h1>
            <div className="career-content d-f">
                <div className="career-content-item d-f jc-sb align-center">
                    <div className="content-item-caption d-f">
                        <div className="content-item-about">Senior</div>
                        <h3 className="title content-item-title">React developer</h3>
                        <div className="content-item-about">Hot</div>
                    </div>
                    <div className="content-item-info">Salary: $ 1500</div>
                    <div className="content-item-info">Lutsk, Rivne, remote</div>
                    <a href="" className="title content-item-view">View detail</a>
                </div>
                <div className="career-content-item d-f jc-sb align-center">
                    <div className="content-item-caption d-f">
                        <div className="content-item-about">Middle</div>
                        <h3 className="title content-item-title">PHP developer</h3>
                    </div>
                    <div className="content-item-info">Salary: $ 1100</div>
                    <div className="content-item-info">Lutsk, Rivne, remote</div>
                    <a href="" className="title content-item-view">View detail</a>
                </div>
                <div className="career-content-item d-f jc-sb align-center">
                    <div className="content-item-caption d-f">
                        <div className="content-item-about">Senior</div>
                        <h3 className="title content-item-title">Wordpress developer</h3>
                    </div>
                    <div className="content-item-info">Salary: $ 1100</div>
                    <div className="content-item-info">Lutsk, Rivne, remote</div>
                    <a href="" className="title content-item-view">View detail</a>
                </div>
                <div className="career-content-item d-f jc-sb align-center">
                    <div className="content-item-caption d-f">
                        <div className="content-item-about">Junior</div>
                        <h3 className="title content-item-title">Laravel developer</h3>
                    </div>
                    <div className="content-item-info">Salary: $ 550</div>
                    <div className="content-item-info">Lutsk, Rivne, remote</div>
                    <a href="" className="title content-item-view">View detail</a>
                </div>
            </div>
        </div>
        <Contacts/>
    </>
  )
}

export default Career