import React, { useState } from 'react'
import consumeApi from '../consumeApi';
import Modal from 'react-modal';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import BootstrapTable from 'react-bootstrap-table-next';

//column headers 
const newsColumns = [{
    dataField: 'date',
    text: 'Date'
}, {
    dataField: 'title',
    text: 'Title'
}, {
    dataField: 'description',
    text: 'Description'
}];

const divStyle = {
    height: '100vh',
    //backgroundColor: 'orange'
};

const orange = {backgroundColor: '#F76902'};

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};


export default function News() {
    const {
        data
    } = consumeApi('/news/older')

    var subtitle;
    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }
    
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#F76902';
    }
    
    function closeModal(){
        setIsOpen(false);
    }
    return(
        <div style={divStyle}>
            {console.log(data.older)}
            <button className="btn" style={orange} onClick={openModal}>Check out the latest news!</button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="News"
            >
                <h2 className='pull-left' ref={_subtitle => (subtitle = _subtitle)}>News</h2>
                <button class="btn pull-right text-white" style={orange} onClick={closeModal}>close</button>
                <div className='mt-5'>I am a modal</div>
                <div>
                    {data[0].map((news, i) =>
                        <div>
                            {/* <h4>{news.date}</h4> */}
                            {/* <small>{news.date}</small> */}
                            {/* <p>{news.description}</p> */}
                        </div>
                    )}
                </div>
                <form>
                    <input />
                    <button>tab navigation</button>
                    <button>stays</button>
                    <button>inside</button>
                    <button>the modal</button>
                </form>
            </Modal>
        </div>     
    )
}