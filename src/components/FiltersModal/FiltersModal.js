import React, {useState} from 'react';
// 3. Use your connected widget


const FiltersModal = ({displayModal ,children}) => {
    // const [shown, setShown] = useState(show);
    // console.log('show', shown)
    return (
        <div
            className="modal show p-0"
            style={{
                display: 'block',
                height:'100vh',
                overflow:'hidden'
            }}
        >
            <div className="modal-dialog m-0" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Filter</h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={() => displayModal(false)}
                        >
                            <span aria-hidden="true"></span>
                        </button>
                    </div>
                    <div
                        className="modal-body"
                        style={{
                            height:'70vh',
                            overflow:'scroll'
                        }}
                    >
                        {children}
                    </div>
                    <div className="modal-footer justify-content-center"
                         style={{
                             marginBottom:'200px'
                         }}
                    >
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => displayModal(false)}
                        >Show results
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FiltersModal;
