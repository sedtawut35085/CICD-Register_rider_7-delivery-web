export const LoginContent = {
    title        : "ลงทะเบียนผู้ใช้งาน",
    button : {
        email    : "ลงทะเบียน",
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
    loading : "กำลังลงทะเบียนบัญชี",
    loginmessage : "มีบัญชีอยู่แล้ว ? คลิกเพื่อเข้าสู่ระบบ"
}

export const LoginemailContent = {
    title        : "เข้าสู่ระบบ",
    button : {
        email    : "เข้าสู่ระบบ",
    },
    placeholder : {
        email           : "อีเมลผู้ใช้งาน",
        password        : "รหัสผ่าน",
    },
    errorpasswordmessage : {
        emthycase       : "โปรดใส่รหัสผ่าน",
        minlengthcase   : "ความยาวของรหัสผ่านต้องอย่างน้อย 8 ตัว",
        uppercase       : "ต้องมีตัวอักษรใหญ่อย่างน้อย 1 ตัว",
        lowercase       : "ต้องมีตัวอักษรเล็กอย่างน้อย 1 ตัว",
        digitcase       : "ต้องมีตัวเลขอย่างน้อย 1 ตัว",
        specialcharcase : "ต้องมีตัวอักษรพิเศษอย่างน้อย 1 ตัว",
    },
    errorlogin : "อีเมลหรือรหัสผ่านไม่ถูกต้อง",
    registermessage : "ไม่มีบัญชี ? คลิกเพื่อลงทะเบียนบัญชี",
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
            bodysuggest : ["ไม่สวมหมวก แว่นกันแดด","หรือเครื่องประดับอื่นๆที่บดบังใบหน้า","เป็นรูปสีไม่เกิน 6 เดือน","ไฟล์รูปต้องเป็น jpg หรือ png"]
        },
        idcardpicture : {
            title : "รูปบัตรประชาชน",
            buttonclick : "คลิกเพื่ออัพโหลด",
            buttonclickagain : "คลิกเพื่ออัพโหลดรูปอีกครั้ง",
            errormessage : "โปรดคลิกเพื่ออัพโหลดรูปบัตรประชน"
        },
        idcardpicturesuggest : {
            title : "คำแนะนำรูป",
            bodysuggest : ["ภาพถ่ายด้านหน้าบัตรประชาชน","ตัวอักษรชัดเจน ไม่มีเงาสะท้อน","ไฟล์รูปต้องเป็น jpg หรือ png"]
        },
    },
    placeholder : {
        name   : "นายสมชาย",
        surname : "เข็มกลัด",
        birthday : "00/00/0000",
        email : "example@gmail.com",
        age : "20",
        cardnumber : "0-0000-00000-00-0",
        cardissuedate : "00/00/0000",
        cardexpiredate : "00/00/0000"
    },
    messegeerror : "เกิดข้อผิดพลาด",
    messageerrorcardnumber : "ข้อมูลต้องเป็นรูปแบบ 0-0000-00000-00-0",
    messageerrorphonenumber : "ข้อมูลต้องเป็นรูปแบบ 000-000-0000"

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
            bodysuggest : ["ภาพถ่ายหน้าเลขสมุดบัญชีธนาคาร","ตัวอักษรชัดเจน ไม่มีเงาสะท้อน","ไฟล์รูปต้องเป็น jpg หรือ png"],
        },
        criminalhistorypicture : {
            title : "รูปประวัติตรวจสอบอาญชกรรม",
            buttonclick : "คลิกเพื่ออัพโหลด",
            buttonclickagain : "คลิกเพื่ออัพโหลดรูปอีกครั้ง",
            errormessage : "โปรดคลิกเพื่ออัพโหลดรูปประวัติตรวจสอบอาญชกรรม"
        },
        criminalhistorypicturesuggest : {
            title : "คำแนะนำรูป",
            bodysuggest : ["ภาพตรวจสอบประวัติอาญชกรรม","ตัวอักษรชัดเจน ไม่มีเงาสะท้อน","ไฟล์รูปต้องเป็น jpg หรือ png"]
        },
    },
    placeholder : {
        name   : "นายสมชาย",
        surname : "เข็มกลัด",
        idbookbank : "012-345678-9",
        namebookbank : "ธนาคารไทยพานิชณ์"
    },
    messageerrorbookbanknumber : "ข้อมูลต้องเป็นรูปแบบ 000-000000-0",
    messegeerror : "เกิดข้อผิดพลาด"

}

export const DriverLicenseInformationContent = {
    title       : "กรอกข้อกรอกข้อมูลใบขับขี่",
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
            bodysuggest :["ภาพถ่ายด้านหน้าใบขับขี่","ตัวอักษรชัดเจน ไม่มีเงาสะท้อน","ไฟล์รูปต้องเป็น jpg หรือ png"],
        },
        documentdriverlicencepicture : {
            title : "รูปภาพเอกสารยืนยันใบขับขี่ตลอดชีพ",
            buttonclick : "คลิกเพื่ออัพโหลด",
            buttonclickagain : "คลิกเพื่ออัพโหลดรูปอีกครั้ง",
            errormessage : "โปรดคลิกเพื่ออัพโหลดเอกสารยืนยันใบขับขี่ตลอดชีพ"
        },
        documentdriverlicencepicturesuggest : {
            title : "คำแนะนำรูป",
            bodysuggest :["ภาพถ่ายเอกสารยืนยันใบขับขี่ตลอดชีพ","ตัวอักษรชัดเจน ไม่มีเงาสะท้อน","ไฟล์รูปต้องเป็น jpg หรือ png"],
        },  
    },
    placeholder : {
        name   : "นายสมชาย",
        surname : "เข็มกลัด",
        idbookbank : "012-345678-9",
        namebookbank : "ธนาคารไทยพานิชณ์",
        normaldriverlicense : {
            numberdriverlicense : "00000000",
            issuedatedriverlicense : "00/00/0000",
            expiredatedriverlicense : "00/00/0000"
        },
        specialdriverlicense : {
            numberdriverlicense : "00000000",
            issuedatedriverlicense : "00/00/0000",
         
        },
    
    },
    messagesmartcarderror : "โปรเลือกชนิดของใบขับขี่ตลอดชีพของคุณ",
    messagetypeerror : "โปรดเลือกชนิดของใบขับขี่",
    messageerrordiverlicensenumber : "ข้อมูลต้องเป็นรูปแบบ 00000000",
    messegeerror : "เกิดข้อผิดพลาด"
}

export const optionsgender = [
    { value: "", disable: true , label:"ไม่ระบุ"},
    { value: "ชาย", disable: false , label: "ชาย"},
    { value: "หญิง", disable: false , label: "หญิง"}
]

export const optionscountry = [
    { value: "กรุงเทพมหานคร", disable: false , label: "กรุงเทพมหานคร"},
    { value: "กระบี่", disable: false , label: "กระบี่"},
    { value: "กาญจนบุรี", disable: false , label: "กาญจนบุรี"},
    { value: "กาฬสินธุ์", disable: false , label: "กาฬสินธุ์"},
    { value: "กำแพงเพชร", disable: false , label: "กำแพงเพชร"},
    { value: "ขอนแก่น", disable: false , label: "ขอนแก่น"},
    { value: "จันทบุรี", disable: false , label: "จันทบุรี"},
    { value: "ฉะเชิงเทรา", disable: false , label: "ฉะเชิงเทรา"},
    { value: "ชลบุรี", disable: false , label: "ชลบุรี"},
    { value: "ชัยนาท", disable: false , label: "ชัยนาท"},
    { value: "ชัยภูมิ", disable: false , label: "ชัยภูมิ"},
    { value: "ชุมพร", disable: false , label: "ชุมพร"},
    { value: "เชียงราย", disable: false , label: "เชียงราย"},
    { value: "เชียงใหม่", disable: false , label: "เชียงใหม่"},
    { value: "ตรัง", disable: false , label: "ตรัง"},
    { value: "ตราด", disable: false , label: "ตราด"},
    { value: "ตาก", disable: false , label: "ตาก"},
    { value: "นครนายก", disable: false , label: "นครนายก"},
    { value: "นครปฐม", disable: false , label: "นครปฐม"},
    { value: "นครพนม", disable: false , label: "นครพนม"},
    { value: "นครราชสีมา", disable: false , label: "นครราชสีมา"},
    { value: "นครศรีธรรมราช", disable: false , label: "นครศรีธรรมราช"},
    { value: "นครสวรรค์", disable: false , label: "นครสวรรค์"},
    { value: "นนทบุรี", disable: false , label: "นนทบุรี"},
    { value: "นราธิวาส", disable: false , label: "นราธิวาส"},
    { value: "น่าน", disable: false , label: "น่าน"},
    { value: "บึงกาฬ", disable: false , label: "บึงกาฬ"},
    { value: "บุรีรัมย์", disable: false , label: "บุรีรัมย์"},
    { value: "ปทุมธานี", disable: false , label: "ปทุมธานี"},
    { value: "ประจวบคีรีขันธ์", disable: false , label: "ประจวบคีรีขันธ์"},
    { value: "ปราจีนบุรี", disable: false , label: "ปราจีนบุรี"}
]

export const optionstypedriverlicense = [
    { value: "", disable: true , label:"ไม่ระบุ"},
    { value: "ใบขับขี่รถชนิดชั่วคราว", disable: false , label: "ใบขับขี่รถชนิดชั่วคราว"},
    { value: "ใบขับขี่รถยนต์ส่วนบุคคล", disable: false , label: "ใบขับขี่รถยนต์ส่วนบุคคล"},
    { value: "ใบขับขี่รถยนต์สามล้อส่วนบุคคล", disable: false , label: "ใบขับขี่รถยนต์สามล้อส่วนบุคคล"},
    { value: "ใบขับขี่รถจักรยานยนต์ส่วนบุคคล", disable: false , label: "ใบขับขี่รถจักรยานยนต์ส่วนบุคคล"},
    { value: "ใบขับขี่สากล หรือใบอนุญาตขับรถระหว่างประเทศ", disable: false , label: "ใบขับขี่สากล หรือใบอนุญาตขับรถระหว่างประเทศ"},
    { value: "ใบขับขี่รถจักรยานยนต์สาธารณะ", disable: false , label: "ใบขับขี่รถจักรยานยนต์สาธารณะ"},
    { value: "ใบขับขี่รถบดถนน", disable: false , label: "ใบขับขี่รถบดถนน"},
    { value: "ใบขับขี่รถแทรกเตอร์", disable: false , label: "ใบขับขี่รถแทรกเตอร์"},
    { value: "ใบขับขี่รถชนิดอื่น", disable: false , label: "ใบขับขี่รถชนิดอื่น"},
]

export const optionstypecar = [
    { value: "", disable: true , label:"ไม่ระบุ"},
    { value: "จักรยานยนต์", disable: false , label: "จักรยานยนต์"},
    { value: "รถยนต์", disable: false , label: "รถยนต์"},
]

export const optionstypesigncar = [
    { value: "", disable: true , label:"ไม่ระบุ"},
    { value: "ป้ายสีขาว ตัวอักษรสีดำ", disable: false , label: "ป้ายสีขาว ตัวอักษรสีดำ"},
    { value: "ป้ายสีขาว ตัวอักษรสีเขียว", disable: false , label: "ป้ายสีขาว ตัวอักษรสีเขียว"},
    { value: "ป้ายสีขาว ตัวอักษรสีน้ำเงิน", disable: false , label:"ป้ายสีขาว ตัวอักษรสีน้ำเงิน"},
    { value: "ป้ายประมูลหรือป้ายทะเบียนที่มีพื้นหลังเป็นลายกราฟฟิค", disable: false , label:"ป้ายประมูลหรือป้ายทะเบียนที่มีพื้นหลังเป็นลายกราฟฟิค"},
    { value: "ป้ายสีแดง", disable: false , label:"ป้ายสีแดง"},
    { value: "ป้ายสีเหลือง ตัวอักษรสีดำ", disable: false , label:"ป้ายสีเหลือง ตัวอักษรสีดำ"},
    // { value: "ป้ายสีเหลือง ตัวอักษรสีเขียว", disable: true , label:"ป้ายสีเหลือง ตัวอักษรสีเขียว"},
    // { value: "ป้ายสีเหลือง ตัวอักษรสีแดง", disable: true , label:"ป้ายสีเหลือง ตัวอักษรสีแดง"},
    // { value: "ป้ายสีเหลือง ตัวอักษรสีน้ำเงิน", disable: true , label:"ป้ายสีเหลือง ตัวอักษรสีน้ำเงิน"},
    // { value: "ป้ายสีเขียว ตัวอักษรสีดำ/สีขาว", disable: true , label:"ป้ายสีเขียว ตัวอักษรสีดำ/สีขาว"},
    // { value: "ป้ายสีส้ม ตัวอักษรสีดำ", disable: true , label:"ป้ายสีส้ม ตัวอักษรสีดำ"},
    // { value: "ป้ายสีขาว (ไม่สะท้อนแสง) ตัวหนังสือสีดำ", disable: true , label:"ป้ายสีขาว (ไม่สะท้อนแสง) ตัวหนังสือสีดำ"},
    // { value: "ป้ายสีฟ้า (ไม่สะท้อนแสง) ตัวหนังสือสีขาว", disable: true , label:"ป้ายสีฟ้า (ไม่สะท้อนแสง) ตัวหนังสือสีขาว"},
]

export const CarInformationContent = {
    title       : "กรอกข้อมูลยานพาหนะ",
    placeholder : {
        typecar : "รถยนต์",
        numbercar : "กข 1234",
        typeofcarsign : "ทั่วไป",
        countryofsigncar : "กรุงเทพ",
        brand : "โตโยต้า",
        color : "แดง",
        licenseissuedate : "00/00/0000",
        licenseexpiredate : "00/00/0000",
        licensename : "นายสมชาย",
        taxissuedate : "00/00/0000",
        taxexpiredate : "00/00/0000"
    },
    label : {
        typecar : "ชนิดยานพาหนะ",
        numbercar : "เลขทะเบียนรถ",
        typeofcarsign : "ประเภทป้ายทะเบียน",
        countryofsigncar : "จังหวัดที่จดทะเบียนรถ",
        brand : "ยี่ห้อรถ",
        color : "สีรถ",
        licenseissuedate : "วันที่ออก พรบ.",
        licenseexpiredate : "วันหมดอายุ พรบ.",
        licensename : "ชื่อผู้ขอกรรมสิทธิ",
        taxissuedate : "วันที่เสียภาษี",
        taxexpiredate : "วันที่ครบกำหนดเสียภาษี",
        carlicencepicture : {
            title : "รูปภาพจดทะเบียนรถ",
            buttonclick : "คลิกเพื่ออัพโหลด",
            buttonclickagain : "คลิกเพื่ออัพโหลดรูปอีกครั้ง",
            errormessage : "โปรดคลิกเพื่ออัพโหลดรูปภาพจดทะเบียนรถ"
        },  
        carlicencepicturesuggest : {
            title : "คำแนะนำรูป",
            bodysuggest :["รูปภาพจดทะเบียนรถต้องมี","ตัวอักษรชัดเจน ไม่มีเงาสะท้อน","ไฟล์รูปต้องเป็น jpg หรือ png"],
        },  
        taxpicture : {
            title : "รูปรายการเสียภาษี",
            buttonclick : "คลิกเพื่ออัพโหลด",
            buttonclickagain : "คลิกเพื่ออัพโหลดรูปอีกครั้ง",
            errormessage : "โปรดคลิกเพื่ออัพโหลดรูปรายการเสียภาษี"
        },  
        taxpicturesuggest : {
            title : "คำแนะนำรูป",
            bodysuggest :["รูปภาพรายการเสียภาษีต้องมี","ตัวอักษรชัดเจน ไม่มีเงาสะท้อน","ไฟล์รูปต้องเป็น jpg หรือ png"],
        },  
    },
    messegeerror : "เกิดข้อผิดพลาด"
}

export const FinalContent = {
    label : "กรอกข้อมูลเสร็จสิ้น",
    description : "รอการอนุมัติจะส่งไปยังอีเมลของคุณ"

}
