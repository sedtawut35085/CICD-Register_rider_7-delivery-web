export const LoginContent = {
    title        : "ลงทะเบียนผู้ใช้งาน",
    button : {
        email    : "เข้าสู่ระบบ",
        facebook : "เข้าสู่ระบบด้วย Facebook",
        google   : "เข้าสู่ระบบด้วย Google"
    },
    placeholder : {
        email           : "อีเมลผู้ใช้งาน",
        password        : "รหัสผ่าน",
        passwordconfirm : "กรอกรหัสผ่านอีกครั้ง"
    },
    errorpasswordmessage : {
        emthycase       : "โปรดใส่รหัสผ่าน",
        minlengthcase   : "ความยาวของรหัสผ่านต้องอย่างน้อย 8 ตัว",
        uppercase       : "ต้องมีตัวอักษรใหญ่อย่างน้อย 1 ตัว",
        lowercase       : "ต้องมีตัวอักษรเล็กอย่างน้อย 1 ตัว",
        digitcase       : "ต้องมีตัวเลขอย่างน้อย 1 ตัว",
        specialcharcase : "ต้องมีตัวอักษรพิเศษอย่างน้อย 1 ตัว",
    },
    errorconfirmpasswordmessage : {
        notmatch            : "รหัสผ่านไม่ตรงกัน",
        passwordnotcorrect  : "โปรดใส่รหัสผ่านให้ถูกต้องก่อนยืนยันรหัสผ่าน"
    },
    errorregistermailmessage : {
        emailalreadyuse     : "อีเมลนี้ได้ถูกใช้งานไปแล้ว"
    },
    loading : "กำลังเข้าสู่ระบบ"
}

export const ConfirmemailContent = {
    title               : "ใส่รหัส 6 ตัวที่ส่งไปยังเมล",
    resendcode          : "คลิกเพื่อส่งรหัสอีกครั้ง",
    successresendcode   : "ส่งรหัสไปยังเมลของคุณเรียบร้อยแล้ว",
    errorcodemessage    : "รหัสผิด โปรดคลิกส่งรหัสอีกครั้งเพื่อรับรหัสใหม่",
    button : {
        submit          : "ยืนยัน"
    }
}

export const ConfirmphoneContent = {
    title               : "กรอกเลข OTP ที่ส่งไปยังเลข",
    loading             : "กำลังตรวจสอบเลข OTP",
    codenotcorrect      : "เลข OTP ผิดโปรดตรวจสอบอีกครั้ง",
    resendcode          : "คลิกเพื่อส่ง OTP อีกครั้ง",
    successresendcode   : "ส่งรหัสไปยังเมลของคุณเรียบร้อยแล้ว",
}

export const PreliminaryContent = {
    title       : "กรอกข้อมูลผู้ใช้งาน",
    label : {
        name    : "ชื่อ",
        surname : "นามสกุล",
        email   : "อีเมล",
        country : "จังหวัดที่ต้องการรับงาน"
    },
    // dropdown : ["ไม่ระบุ","กรุงเทพมหานคร","กระบี่","กาญจนบุรี","กาฬสินธุ์","กำแพงเพชร","ขอนแก่น","จันทบุรี","ฉะเชิงเทรา","ชลบุรี","ชัยนาท","ชัยภูมิ"],
    placeholder : {
        name    : "นายสมชาย",
        surname : "เข็มกลัด",
        email   : "Example123@gmail.com",
    },
    button : {
        submit  : "ยืนยัน"
    }
}

export const RegisterphoneContent = {
    title       : "กรอกข้อมูลเบอร์โทรศัพท์",
    label : {
        phone   : "เบอร์โทรศัพท์ของคุณ"
    },
    placeholder : {
        phone   : "+6696165211"
    },
    button : {
        submit  : "ยืนยัน"
    },
    loading : "กำลังยืนยันเบอร์โทรศัพท์"
}

export const VerifyphoneOTPContent = {
    title               : "กรอกเลข OTP ที่ส่งไปยังเลข",
    resendOTP           : "คลิกเพื่อส่ง OTP อีกครั้ง",
    successresendOTP    : "ส่ง OTP อีกครั้งเรียบร้อยแล้ว"
}

export const PersonalInformationContent = {
    title       : "กรอกข้อมูลส่วนบุคคล",
    label : {
        name   : "ชื่อ",
        surname : "นามสกุล",
        birthday : "วันเกิด",
        gender : "เพศ",
        email : "อีเมล",
        age : "อายุ",
        cardnumber : "เลขบัตรประชาชน",
        cardissuedate : "วันที่ออกบัตร",
        cardexpiredate : "วันหมดอายุบัตร",
        profilepicture : {
            title : "รูปภาพตัวเองด้านหน้า",
            buttonclick : "คลิกเพื่ออัพโหลด",
            buttonclickagain : "คลิกเพื่ออัพโหลดรูปอีกครั้ง",
            errormessage : "โปรดคลิกคลิกเพื่ออัพโหลดรูปตัวเอง"
        },
        profilepicturesuggest : {
            title : "คำแนะนำรูป",
            bodysuggest : ["ไม่สวมหมวก แว่นกันแดด","หรือเครื่องประดับอื่นๆที่บดบังใบหน้า","เป็นรูปสีไม่เกิน 6 เดือน"]
        },
        idcardpicture : {
            title : "รูปบัตรประชาชน",
            buttonclick : "คลิกเพื่ออัพโหลด",
            buttonclickagain : "คลิกเพื่ออัพโหลดรูปอีกครั้ง",
            errormessage : "โปรดคลิกเพื่ออัพโหลดรูปบัตรประชน"
        },
        idcardpicturesuggest : {
            title : "คำแนะนำรูป",
            bodysuggest : ["ภาพถ่ายด้านหน้าบัตรประชาชน","ตัวอักษรชัดเจน ไม่มีเงาสะท้อน"]
        },
    },
    placeholder : {
        name   : "นายสมชาย",
        surname : "เข็มกลัด",
        birthday : "00/00/0000",
        gender : {
            option : "ไม่ระบุ",
            option1 : "ชาย",
            option2 : "หญิง"
        },
        email : "example@gmail.com",
        age : "20",
        cardnumber : "0-0000-0000-00-0",
        cardissuedate : "00/00/0000",
        cardexpiredate : "00/00/0000"
    },
    messegeerror : "เกิดข้อผิดพลาด"

}

export const RelevantpersonalInformationContent = {
    title : "กรอกข้อมูลผู้ที่เกี่ยวข้อง",
    label : {
        name   : "ชื่อ",
        surname : "นามสกุล",
        relationship : "ความสัมพันธ์",
        phone : "เบอร์โทรศัพท์",
    },
    placeholder : {
        name   : "นายสมชาย",
        surname : "เข็มกลัด",
        relationship : "บิดา",
        phone : "000-000-0000",
    },
}

export const BookbankInformationContent = {
    title       : "กรอกข้อมูลบัญชีธนาคาร",
    label : {
        name   : "ชื่อตามบัญชี",
        surname : "นามสกุลตามบัญชี",
        idbookbank : "เลขบัญชีธนาคาร",
        namebookbank : "ชื่อธนาคาร",
        bookbankpicture : {
            title : "รูปบัญชีธนาคารหน้าที่มีชื่อและเลขบัญชี",
            buttonclick : "คลิกเพื่ออัพโหลด",
            buttonclickagain : "คลิกเพื่ออัพโหลดรูปอีกครั้ง",
            errormessage : "โปรดคลิกคลิกเพื่ออัพโหลดรูปบัญชีธนาคาร"
        },
        bookbankpicturesuggest : {
            title : "คำแนะนำรูป",
            bodysuggest : ["ภาพถ่ายหน้าเลขสมุดบัญชีธนาคาร","ตัวอักษรชัดเจน ไม่มีเงาสะท้อน"],
        },
        criminalhistorypicture : {
            title : "รูปประวัติตรวจสอบอาญชกรรม",
            buttonclick : "คลิกเพื่ออัพโหลด",
            buttonclickagain : "คลิกเพื่ออัพโหลดรูปอีกครั้ง",
            errormessage : "โปรดคลิกเพื่ออัพโหลดรูปประวัติตรวจสอบอาญชกรรม"
        },
        criminalhistorypicturesuggest : {
            title : "คำแนะนำรูป",
            bodysuggest : ["ภาพตรวจสอบประวัติอาญชกรรม","ตัวอักษรชัดเจน ไม่มีเงาสะท้อน"]
        },
    },
    placeholder : {
        name   : "นายสมชาย",
        surname : "เข็มกลัด",
        idbookbank : "012-345678-9",
        namebookbank : "ธนาคารไทยพานิชณ์"
    },
    messegeerror : "เกิดข้อผิดพลาด"

}

export const DriverLicenseInformationContent = {
    title       : "กรอกข้อกรอกข้อมูลใบขับขี่มูลบัญชีธนาคาร",
    description : "เลือกชนิดใบขับขี่ ณ ปัจจุบันของคุณแล้วทำการกรอกข้อมูลทั้งหมดให้ครบถ้วนและถูกต้อง",
    label : {
        normaldriverlicense : {
            title : "ใบขับขี่แบบธรรมดา",
            description : "ใบขับขี่เป็นแบบธรรมดาตามกฎหมาย มีวันหมดอายุที่ชัดเจน",
            label : {
                numberdriverlicense : "เลขที่ใบขับขี่",
                typedriverlicense : "ประเภทใบขับขี่",
                issuedatedriverlicense : "วันที่ออกบัตร",
                expiredatedriverlicense : "วันที่บัตรหมดอายุ"
            }
        },
        specialdriverlicense : {
            title : "ใบขับขี่แบบตลอดชีพ",
            description : "ใบขับขี่เป็นแบบตลอดชีพ ไม่มีวันหมดอายุ",
            label : {
                numberdriverlicense : "เลขที่ใบขับขี่",
                typedriverlicense : "ประเภทใบขับขี่",
                issuedatedriverlicense : "วันที่ออกบัตร",
                issmartcarddriverlicense : {
                    title : "ใบขับขี่เป็นชนิดแบบสมาร์ตการ์ดหรือไม่",
                    yes : "ใช่",
                    no : "ไม่ใช่ เป็นแบบบัตรกระดาษธรรมดา"
                }
            }
        },
        driverlicencepicture : {
            title : "รูปภาพใบขับขี่",
            subtitle : "(ด้านหน้า)",
            buttonclick : "คลิกเพื่ออัพโหลด",
            buttonclickagain : "คลิกเพื่ออัพโหลดรูปอีกครั้ง",
            errormessage : "โปรดคลิกเพื่ออัพโหลดรูปใบขับขี่"
        },
        driverlicencepicturesuggest : {
            title : "คำแนะนำรูป",
            bodysuggest :["ภาพถ่ายด้านหน้าใบขับขี่","ตัวอักษรชัดเจน ไม่มีเงาสะท้อน"],
        },
        documentdriverlicencepicture : {
            title : "รูปภาพเอกสารยืนยันใบขับขี่ตลอดชีพ",
            buttonclick : "คลิกเพื่ออัพโหลด",
            buttonclickagain : "คลิกเพื่ออัพโหลดรูปอีกครั้ง",
            errormessage : "โปรดคลิกเพื่ออัพโหลดเอกสารยืนยันใบขับขี่ตลอดชีพ"
        },
        documentdriverlicencepicturesuggest : {
            title : "คำแนะนำรูป",
            bodysuggest :["ภาพถ่ายเอกสารยืนยันใบขับขี่ตลอดชีพ","ตัวอักษรชัดเจน ไม่มีเงาสะท้อน"],
        },
       
    },
    placeholder : {
        name   : "นายสมชาย",
        surname : "เข็มกลัด",
        idbookbank : "012-345678-9",
        namebookbank : "ธนาคารไทยพานิชณ์",
        normaldriverlicense : {
            numberdriverlicense : "00000000",
            typedriverlicense : ["ไม่ระบุ","ใบขับขี่รถชนิดชั่วคราว","ใบขับขี่รถยนต์ส่วนบุคคล","ใบขับขี่รถยนต์สามล้อส่วนบุคคล","ใบขับขี่รถจักรยานยนต์ส่วนบุคคล","ใบขับขี่สากล หรือใบอนุญาตขับรถระหว่างประเทศ","ใบขับขี่รถจักรยานยนต์สาธารณะ","ใบขับขี่รถบดถนน","ใบขับขี่รถแทรกเตอร์","ใบขับขี่รถชนิดอื่น"],
            issuedatedriverlicense : "00/00/0000",
            expiredatedriverlicense : "00/00/0000"
        },
        specialdriverlicense : {
            numberdriverlicense : "00000000",
            typedriverlicense : ["ไม่ระบุ","ใบขับขี่รถชนิดชั่วคราว","ใบขับขี่รถยนต์ส่วนบุคคล","ใบขับขี่รถยนต์สามล้อส่วนบุคคล","ใบขับขี่รถจักรยานยนต์ส่วนบุคคล","ใบขับขี่สากล หรือใบอนุญาตขับรถระหว่างประเทศ","ใบขับขี่รถจักรยานยนต์สาธารณะ","ใบขับขี่รถบดถนน","ใบขับขี่รถแทรกเตอร์","ใบขับขี่รถชนิดอื่น"],
            issuedatedriverlicense : "00/00/0000",
         
        },
    
    },
    messagesmartcarderror : "โปรเลือกชนิดของใบขับขี่ตลอดชีพของคุณ",
    messagetypeerror : "โปรดเลือกชนิดของใบขับขี่",
    messegeerror : "เกิดข้อผิดพลาด"
}
