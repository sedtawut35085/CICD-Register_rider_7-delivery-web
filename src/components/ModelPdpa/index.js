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
                                        {constant.PreliminaryContent.papa.title}
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
                                            ข้อกำหนดและเงื่อนไขในการใช้บริการเว็บไซต์ การสมัครไรเดอร์ 7-delivery ( WEB RIDER REGISTERATION )
                                            โดยผู้ใช้บริการตกลงที่จะผูกพันตามเงื่อนไขการใช้บริการนี้ ซึ่งรายละเอียดดังต่อไปนี้
                                        </p>
                                        <p className='text-sm'>
                                            1. การสมัครใช้บริการ
                                            <br />
                                            1.1 การสมัครใช้บริการเว็บไซต์ การสมัครไรเดอร์ 7-delivery ผู้ใช้บริการต้องมีอายุตั้งแต่ 20 ปีขึ้นไป
                                            <br />
                                            1.2 หากผู้ใช้บริการเป็นผู้เยาว์ ผู้ไร้ความสามารถตามประมวลกฎหมายแพ่งและพาณิชย์ ผู้ใช้บริการต้องได้รับความยินยอมจากผู้แทนโดยชอบธรรม ผู้อนุบาลแล้ว ก่อนการสมัครและใช้บริการ
                                            <br />
                                            1.3 ผู้สมัครใช้บริการจำเป็นต้องให้ข้อมูลที่ถูกต้อง ชัดเจน และเป็นปัจจุบัน ดังนี้ ชื่อ-นามสกุล ที่อยู่ เบอร์โทรศัพท์ของผู้ใช้บริการ เกี่ยวกับข้อมูลของผู้ใช้บริการ ผู้ใช้บริการตกลงที่จะเปลี่ยนแปลงข้อมูลนั้นๆ ให้ถูกต้องอย่างสม่ำเสมอ
                                            <br />
                                            1.4 ผู้ใช้บริการมีสิทธิลงทะเบียนใช้บริการได้เพียง 1 บัญชี/ท่านเท่านั้น
                                            <br />
                                            ทั้งนี้ หากผู้ใช้บริการไม่ปฏิบัติตามที่บริษัทกำหนดในข้อ 1.1-1.4 บริษัทสงวนสิทธิ์ในการยกเลิก/ระงับบัญชี สิทธิประโยชน์ที่ได้รับโดยไม่แจ้งให้ทราบล่วงหน้า
                                            <br /><br />
                                            2. การคุ้มครองข้อมูลส่วนบุคคล
                                            <br />
                                            การเก็บรวบรวม ใช้ และเปิดเผยข้อมูลส่วนบุคคล สำหรับการใช้บริการเว็บไซต์ การสมัครไรเดอร์ 7-delivery (WEB RIDER REGISTERATION)เป็นไปตามเอกสารการแจ้งการประมวลข้อมูลส่วนบุคคล (Privacy Notice) ของบริการนี้
                                            <br /><br />
                                            3. สิทธิประโยชน์
                                            <br />
                                            3.1 การสมัครใช้บริการ บริษัทอาจจัดกิจกรรมส่งเสริมการขาย นำเสนอสินค้าหรือบริการเพื่อตอบสนองความต้องการของผู้ใช้บริการ
                                            <br />
                                            3.2 สิทธิประโยชน์ที่บริษัทเสนอให้แก่ผู้ใช้บริการแต่ละรายอาจแตกต่างกัน ขึ้นอยู่กับพื้นที่การใช้บริการ และ/หรือ นโยบายทางการตลาดของบริษัท
                                            <br /><br />
                                            4. การใช้งานบริการต่างๆ ในเว็บไซต์ การสมัครไรเดอร์ 7-delivery
                                            <br />
                                            ในการเข้าใช้บริการต่างๆ ที่ปรากฏอยู่ในเว็บไซต์ การสมัครไรเดอร์ 7-delivery นั้น นอกจากผู้ใช้บริการต้องปฏิบัติตามเงื่อนไขการใช้บริการนี้แล้ว ผู้ใช้บริการต้องปฏิบัติตามเงื่อนไขการใช้บริการเฉพาะของบริการนั้นๆ ด้วย
                                            <br /><br />
                                            5. การรักษาความปลอดภัย
                                            <br />
                                            ผู้ใช้บริการตกลงเก็บรักษาชื่อบัญชีผู้ใช้ รหัสผ่าน และข้อมูลใดๆ ของตนไว้เป็นความลับ และป้องกันหรือไม่ยินยอมให้ผู้อื่นสามารถเข้าใช้บัญชีได้ ที่เกิดขึ้นจากการเกิดใช้บัญชีดังกล่าว
                                            <br /><br />
                                            6. การกระทำอันขัดต่อกฎหมาย
                                            <br />
                                            ผู้ใช้บริการตกลงว่าจะไม่กระทำการใดๆ ต่อเว็บไซต์ การสมัครไรเดอร์ 7-delivery อันขัดต่อกฎหมายต่างๆ หรือทำให้บริษัทได้รับความเสียหาย ซึ่งรวมถึงแต่ไม่จำกัดเพียงการกระทำดังต่อไปนี้
                                            <br />
                                            6.1 ห้ามผู้ใช้บริการคัดลอก ดัดแปลง ดาวน์โหลด แจกจ่าย หรือเผยแพร่งานอันมีลิขสิทธิ์ เครื่องหมายการค้า/เครื่องหมายบริการ หรือสิทธิบัตร (รวมเรียกว่า “ทรัพย์สินทางปัญญา”) ที่ปรากฎอยู่ในเว็บไซต์ การสมัครไรเดอร์ 7-delivery โดยไม่ได้รับอนุญาตจากบริษัท และการนำเข้างานทรัพย์สินทางปัญญาของผู้อื่น ในลักษณะที่เป็นการละเมิดต่อสิทธิในทรัพย์สินทางปัญญาของบริษัทและ/หรือผู้อื่น อันขัดต่อกฎหมายทรัพย์สินทางปัญญา
                                            <br />
                                            6.2 ห้ามผู้ใช้บริการกระทำการใดๆ ที่อาจส่งผลกระทบต่อการใช้งานตามปกติ ความปลอดภัย และความสมบูรณ์ของการใช้งานเว็บไซต์ การสมัครไรเดอร์ 7-delivery การพยายามหรือการเข้าถึงบัญชีของผู้ใช้บริการรายอื่น อันขัดต่อกฎหมายว่าด้วยการกระทำความผิดทางคอมพิวเตอร์ หากผู้ใช้บริการกระทำการใดๆ ที่ส่งผลกระทบต่อบริษัทหรือผู้ที่เกี่ยวข้อง ผู้ใช้บริการตกลงรับผิดชอบต่อความเสียหายใดๆ ที่เกิดขึ้น โดยบริษัทขอสงวนสิทธิ์ในการพิจารณาดำเนินการทางกฎหมาย
                                            <br />
                                            6.3 ห้ามผู้ใช้บริการกระทำใดๆ ที่เป็นการทุจริตผิดกฎหมาย ก่อและช่วยเหลืออาชญากรรมใดๆ
                                            <br />
                                            ทั้งนี้ บริษัทสงวนสิทธิ์ในการระงับหรือยกเลิกบัญชีผู้ใช้งานที่มีการกระทำมิชอบ ผิดสัญญา หรือมีส่วนต้องสงสัยที่จะมีการกระทำที่ผิดตามกฎหมายและดำเนินคดีตามกฎหมายต่อไป
                                            <br /><br />
                                            7. ข้อจำกัดความรับผิดของบริษัท
                                            <br />
                                            บริษัทขอสงวนสิทธิ์ในการรับผิดในกรณีดังต่อไปนี้
                                            <br />
                                            7.1 ความเสียหายต่อผู้ใช้บริการ ในกรณีที่ผู้ใช้บริการเข้าใช้งานเว็บไซต์ การสมัครไรเดอร์ 7-delivery ผ่านทางลิงก์เชื่อมต่ออื่น เช่น ผ่านทางการค้นหาจากโปรแกรมการค้นหา (Search Engine)
                                            <br />
                                            7.2 การที่ผู้ใช้บริการไม่สามารถเข้าใช้งานเว็บไซต์ การสมัครไรเดอร์ 7-deliveryได้ เนื่องจากอุปกรณ์ ซอฟต์แวร์ หรือการเชื่อมต่ออินเตอร์เน็ตของผู้ใช้บริการไม่รองรับการใช้งาน รวมถึงปัญหาทางเทคนิค ความผิดพลาดและความล้มเหลวอื่นในการเชื่อมต่อกับเว็บไซต์
                                            <br />
                                            7.3 บริษัทสงวนสิทธิ์ในการระงับ ยกเลิก หรือเปลี่ยนแปลงเงื่อนไขการให้สิทธิประโยชน์หากมีการกระทำที่ต้องสงสัยหรืออาจมีการทุจริตกระทำผิดกฎหมาย หรือผิดเงื่อนไขของการให้สิทธิประโยชน์โดยไม่ต้องแจ้งให้ทราบล่วงหน้า
                                            <br /><br />
                                            8. การเชื่อมโยงไปยังแอปพลิเคชันหรือเว็บไซต์อื่น
                                            <br />
                                            ผู้ใช้บริการรับทราบและตกลงว่าเว็บไซต์ การสมัครไรเดอร์ 7-delivery มีการเชื่อมต่อไปยังเว็บไซต์หรือแอปพลิเคชันของบริษัทในกลุ่ม หรือของบุคคลภายนอกซึ่งเป็นเจ้าของบริการนั้น ซึ่งเว็บไซต์หรือแอปพลิเคชันเหล่านี้ไม่อยู่ภายใต้การควบคุมของบริษัท บริษัทไม่รับผิดชอบต่อการดำเนินธุรกรรมของผู้ใช้บริการในเว็บไซต์หรือแอปพลิเคชันนั้น ผู้ใช้บริการควรศึกษาข้อกำหนดและเงื่อนไขการใช้บริการเว็บไซต์หรือแอปพลิเคชันที่ผู้ใช้บริการได้เข้าถึงก่อนการใช้บริการ
                                            <br /><br />
                                            9. การแก้ไขเปลี่ยนแปลง
                                            <br />
                                            ข้อกำหนดและเงื่อนไขการใช้บริการนี้ อาจมีการแก้ไขเปลี่ยนแปลงเป็นครั้งคราวโดยไม่แจ้งล่วงหน้าให้ผู้ใช้บริการทราบ โดยจะประกาศไว้ที่เว็บไซต์ การสมัครไรเดอร์ 7-delivery ร้านเซเว่นอีเลฟเว่น หรือช่องทางอื่นใดที่บริษัทเห็นสมควร
                                            <br /><br />
                                            11. ความสมบูรณ์ของข้อกำหนด
                                            <br />
                                            หากเงื่อนไขการใช้บริการนี้ข้อใดหรือส่วนใดส่วนหนึ่งไม่เป็นไปตามกฎหมาย ไม่มีผลสมบูรณ์ หรือไม่สามารถบังคับใช้ได้ ไม่ว่าจะภายใต้ระเบียบ กฎเกณฑ์ หรือกฎหมายใด ให้ข้อตกลงและเงื่อนไขข้อนั้นหรือส่วนใดส่วนหนึ่งของเงื่อนไขดังกล่าวซึ่งไม่เป็นไปตามกฎหมาย ไม่มีผลสมบูรณ์ หรือไม่สามารถบังคับใช้ ไม่ถือเป็นส่วนหนึ่งของเงื่อนไขการให้บริการนี้ โดยข้อกำหนดดังกล่าวไม่กระทบต่อความถูกต้องตามกฎหมาย การมีผลสมบูรณ์ หรือความสามารถในการบังคับใช้ส่วนอื่น ๆ ที่เหลือของเงื่อนไขการให้บริการนี้
                                            <br /><br />
                                            12. ภาษาและกฎหมายที่ใช้บังคับ
                                            <br />
                                            เงื่อนไขการใช้บริการฉบับนี้ให้ใช้ภาษาไทยเป็นภาษาที่ใช้บังคับ การแปลความหมาย การตีความ ความสมบูรณ์ และการปฏิบัติตามเงื่อนไขการใช้บริการฉบับนี้ ให้เป็นไปตามที่กำหนดไว้ภายใต้บังคับของกฎหมายไทย และให้ศาลไทยเป็นศาลที่มีอำนาจในการพิจารณาคดี
                                            <br /><br />
                                            13. การยื่นข้อร้องเรียน
                                            <br />
                                            หากมีข้อร้องเรียนใดๆ เกี่ยวกับการใช้บริการดังกล่าว สามารถแจ้งได้ที่ศูนย์บริการลูกค้าสัมพันธ์ของบริษัท ดังนี้
                                            <br />
                                            เบอร์โทรศัพท์ 02-826-7744
                                            <br />
                                            อีเมล faq@7eleven.co.th
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
                                        ยินยอม
                                    </button>
                                    <button
                                        className="text-white bg-sky-800 background-transparent font-bold uppercase px-6 py-2 text-sm rounded mr-2 outline-none focus:outline-none ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        ปิด
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