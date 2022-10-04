import * as constant from '../../constant/content'

const ModelComponent = ({ valuechecked, setValueChecked, showModal, setShowModal }) => {

    return (
        <>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center grid overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-3 max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-4 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-xl font-semibold">
                                        {constant.ModalpdpaContent.title}
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-2xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto ">
                                    <div className="my-1 text-slate-500 leading-relaxed ">
                                        <p className='text-sm'>
                                            {constant.ModalpdpaContent.body[0]}
                                        </p>
                                        <p className='text-sm'>
                                            {constant.ModalpdpaContent.body[1]}
                                            <br />
                                            {constant.ModalpdpaContent.body[2]}
                                            <br />
                                            {constant.ModalpdpaContent.body[3]}
                                            <br />
                                            {constant.ModalpdpaContent.body[4]}
                                            <br />
                                            {constant.ModalpdpaContent.body[5]}
                                            <br />
                                            {constant.ModalpdpaContent.body[6]}
                                            <br /><br />
                                            {constant.ModalpdpaContent.body[7]}
                                            <br />
                                            {constant.ModalpdpaContent.body[8]}
                                            <br /><br />
                                            {constant.ModalpdpaContent.body[9]}
                                            <br />
                                            {constant.ModalpdpaContent.body[10]}
                                            <br />
                                            {constant.ModalpdpaContent.body[11]}
                                            <br /><br />
                                            {constant.ModalpdpaContent.body[12]}
                                            <br />
                                            {constant.ModalpdpaContent.body[13]}
                                            <br /><br />
                                            {constant.ModalpdpaContent.body[14]}
                                            <br />
                                            {constant.ModalpdpaContent.body[15]}
                                            <br /><br />
                                            {constant.ModalpdpaContent.body[16]}
                                            <br />
                                            {constant.ModalpdpaContent.body[17]}
                                            <br />
                                            {constant.ModalpdpaContent.body[18]}
                                            <br />
                                            {constant.ModalpdpaContent.body[19]}
                                            <br />
                                            {constant.ModalpdpaContent.body[20]}
                                            <br />
                                            {constant.ModalpdpaContent.body[21]}
                                            <br /><br />
                                            {constant.ModalpdpaContent.body[22]}
                                            <br />
                                            {constant.ModalpdpaContent.body[23]}
                                            <br />
                                            {constant.ModalpdpaContent.body[24]}
                                            <br />
                                            {constant.ModalpdpaContent.body[25]}
                                            <br />
                                            {constant.ModalpdpaContent.body[26]}
                                            <br /><br />
                                            {constant.ModalpdpaContent.body[27]}
                                            <br />
                                            {constant.ModalpdpaContent.body[28]}
                                            <br /><br />
                                            {constant.ModalpdpaContent.body[29]}
                                            <br />
                                            {constant.ModalpdpaContent.body[30]}
                                            <br /><br />
                                            {constant.ModalpdpaContent.body[31]}
                                            <br />
                                            {constant.ModalpdpaContent.body[32]}
                                            <br /><br />
                                            {constant.ModalpdpaContent.body[33]}
                                            <br />
                                            {constant.ModalpdpaContent.body[34]}
                                            <br /><br />
                                            {constant.ModalpdpaContent.body[35]}
                                            <br />
                                            {constant.ModalpdpaContent.body[36]}
                                            <br />
                                            {constant.ModalpdpaContent.body[37]}
                                            <br />
                                            {constant.ModalpdpaContent.body[38]}
                                        </p>
                                    </div>
                                </div>
                                {/*footer*/} 
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                     <button
                                        className="text-white bg-red-800 background-transparent font-bold uppercase px-6 py-2 text-sm rounded mr-2 outline-none focus:outline-none ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => {
                                            setValueChecked(true)
                                            setShowModal(false)
                                        }}
                                    >
                                        {constant.ModalpdpaContent.buttonsuccess}
                                    </button>
                                    <button
                                        className="text-white bg-sky-800 background-transparent font-bold uppercase px-6 py-2 text-sm rounded mr-2 outline-none focus:outline-none ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        {constant.ModalpdpaContent.buttonclose}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    )
}

export default ModelComponent