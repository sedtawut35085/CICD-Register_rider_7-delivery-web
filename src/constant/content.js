export const NavbarContent = {
    titlelogo : "7-Delivery",
    logout : "ออกจากระบบ"
}

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
        country : "จังหวัดที่ต้องการรับงาน",
    },
    papa : {
        title : "ข้อกำหนดและการความยินยอม",
        des : "อ่านข้อกำหนดและการความยินยอมคลิก",
        body : ""
    },
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
        birthday : "ดด/วว/ปป",
        email : "example@gmail.com",
        age : "20",
        cardnumber : "0-0000-00000-00-0",
        cardissuedate : "ดด/วว/ปป",
        cardexpiredate : "ดด/วว/ปป"
    },
    messegeerror : "เกิดข้อผิดพลาด",
    messageerrorcardnumber : "บัตรประชาชนต้องเป็นรูปแบบ X-XXXX-XXXXX-XX-X",
    messageerrorphonenumber : "เบอร์โทรศัพท์ต้องเป็นรูปแบบ XXX-XXX-XXXX"

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
    messageerrorbookbanknumber : "เลขบัญชีต้องเป็นรูปแบบ XXX-XXXXXX-X",
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
            issuedatedriverlicense : "ดด/วว/ปป",
            expiredatedriverlicense : "ดด/วว/ปป"
        },
        specialdriverlicense : {
            numberdriverlicense : "00000000",
            issuedatedriverlicense : "ดด/วว/ปป",
         
        },
    
    },
    messagesmartcarderror : "โปรเลือกชนิดของใบขับขี่ตลอดชีพของคุณ",
    messagetypeerror : "โปรดเลือกชนิดของใบขับขี่",
    messageerrordiverlicensenumber : "เลขใบขับขี่ต้องเป็นรูปแบบ XXXXXXXX",
    messegeerror : "เกิดข้อผิดพลาด"
}

export const optionsgender = [
    { value: "", disable: true , label:"ไม่ระบุ"},
    { value: "ชาย", disable: false , label: "ชาย"},
    { value: "หญิง", disable: false , label: "หญิง"}
]

export const optionscountry = [
    { value: "", disable: true , label: "ไม่ระบุ"},
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
    { value: "ปราจีนบุรี", disable: false , label: "ปราจีนบุรี"},
    { value: "ปัตตานี", disable: false , label: "ปัตตานี"},
    { value: "พระนครศรีอยุธยา", disable: false , label: "พระนครศรีอยุธยา"},
    { value: "พังงา", disable: false , label: "พังงา"},
    { value: "พัทลุง", disable: false , label: "พัทลุง"},
    { value: "พิจิตร", disable: false , label: "พิจิตร"},
    { value: "พิษณุโลก", disable: false , label: "พิษณุโลก"},
    { value: "เพชรบุรี", disable: false , label: "เพชรบุรี"},
    { value: "เพชรบูรณ์", disable: false , label: "เพชรบูรณ์"},
    { value: "แพร", disable: false , label: "แพร"},
    { value: "พะเยา", disable: false , label: "พะเยา"},
    { value: "ภูเก็ต", disable: false , label: "ภูเก็ต"},
    { value: "มหาสารคาม", disable: false , label: "มหาสารคาม"},
    { value: "มุกดาหาร", disable: false , label: "มุกดาหาร"},
    { value: "แม่ฮ่องสอน", disable: false , label: "แม่ฮ่องสอน"},
    { value: "ยะลา", disable: false , label: "ยะลา"},
    { value: "ยโสธร", disable: false , label: "ยโสธร"},
    { value: "ร้อยเอ็ด", disable: false , label: "ร้อยเอ็ด"},
    { value: "ระนอง", disable: false , label: "ระนอง"},
    { value: "ระยอง", disable: false , label: "ระยอง"},
    { value: "ราชบุรี", disable: false , label: "ราชบุรี"},
    { value: "ลพบุรี", disable: false , label: "ลพบุรี"},
    { value: "ลำปาง", disable: false , label: "ลำปาง"},
    { value: "ลำพูน", disable: false , label: "ลำพูน"},
    { value: "เลย", disable: false , label: "เลย"},
    { value: "ศรีสะเกษ", disable: false , label: "ศรีสะเกษ"},
    { value: "สกลนคร", disable: false , label: "สกลนคร"},
    { value: "สงขลา", disable: false , label: "สงขลา"},
    { value: "สตูล", disable: false , label: "สตูล"},
    { value: "สมุทรปราการ", disable: false , label: "สมุทรปราการ"},
    { value: "สมุทรสงคราม", disable: false , label: "สมุทรสงคราม"},
    { value: "สมุทรสาคร", disable: false , label: "สมุทรสาคร"},
    { value: "สระแก้ว", disable: false , label: "สระแก้ว"},
    { value: "สระบุรี", disable: false , label: "สระบุรี"},
    { value: "สิงห์บุรี", disable: false , label: "สิงห์บุรี"},
    { value: "สุโขทัย", disable: false , label: "สุโขทัย"},
    { value: "สุพรรณบุรี", disable: false , label: "สุพรรณบุรี"},
    { value: "สุราษฎร์ธานี", disable: false , label: "สุราษฎร์ธานี"},
    { value: "สุรินทร์", disable: false , label: "สุรินทร์"},
    { value: "หนองคาย", disable: false , label: "หนองคาย"},
    { value: "หนองบัวลำภู", disable: false , label: "หนองบัวลำภู"},
    { value: "อ่างทอง", disable: false , label: "อ่างทอง"},
    { value: "อุดรธานี", disable: false , label: "อุดรธานี"},
    { value: "อุตรดิตถ์", disable: false , label: "อุตรดิตถ์"},
    { value: "อุบลราชธานี", disable: false , label: "อุบลราชธานี"},
    { value: "อำนาจเจริญ", disable: false , label: "อำนาจเจริญ"}
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
        licenseissuedate : "ดด/วว/ปป",
        licenseexpiredate : "ดด/วว/ปป",
        licensename : "นายสมชาย",
        taxissuedate : "ดด/วว/ปป",
        taxexpiredate : "ดด/วว/ปป"
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


export const ModalpdpaContent = {
    title : "ข้อกำหนดและการความยินยอม",
    body : [
        "ข้อกำหนดและเงื่อนไขในการใช้บริการเว็บไซต์ การสมัครไรเดอร์ 7-delivery ( WEB RIDER REGISTERATION ) โดยผู้ใช้บริการตกลงที่จะผูกพันตามเงื่อนไขการใช้บริการนี้ ซึ่งรายละเอียดดังต่อไปนี้",
        "1. การสมัครใช้บริการ",
        "1.1 การสมัครใช้บริการเว็บไซต์ การสมัครไรเดอร์ 7-delivery ผู้ใช้บริการต้องมีอายุตั้งแต่ 20 ปีขึ้นไป",
        "1.2 หากผู้ใช้บริการเป็นผู้เยาว์ ผู้ไร้ความสามารถตามประมวลกฎหมายแพ่งและพาณิชย์ ผู้ใช้บริการต้องได้รับความยินยอมจากผู้แทนโดยชอบธรรม ผู้อนุบาลแล้ว ก่อนการสมัครและใช้บริการ",
        "1.3 ผู้สมัครใช้บริการจำเป็นต้องให้ข้อมูลที่ถูกต้อง ชัดเจน และเป็นปัจจุบัน ดังนี้ ชื่อ-นามสกุล ที่อยู่ เบอร์โทรศัพท์ของผู้ใช้บริการ เกี่ยวกับข้อมูลของผู้ใช้บริการ ผู้ใช้บริการตกลงที่จะเปลี่ยนแปลงข้อมูลนั้นๆ ให้ถูกต้องอย่างสม่ำเสมอ",
        "1.4 ผู้ใช้บริการมีสิทธิลงทะเบียนใช้บริการได้เพียง 1 บัญชี/ท่านเท่านั้น",
        "ทั้งนี้ หากผู้ใช้บริการไม่ปฏิบัติตามที่บริษัทกำหนดในข้อ 1.1-1.4 บริษัทสงวนสิทธิ์ในการยกเลิก/ระงับบัญชี สิทธิประโยชน์ที่ได้รับโดยไม่แจ้งให้ทราบล่วงหน้า",
        "2. การคุ้มครองข้อมูลส่วนบุคคล",
        "การเก็บรวบรวม ใช้ และเปิดเผยข้อมูลส่วนบุคคล สำหรับการใช้บริการเว็บไซต์ การสมัครไรเดอร์ 7-delivery (WEB RIDER REGISTERATION)เป็นไปตามเอกสารการแจ้งการประมวลข้อมูลส่วนบุคคล (Privacy Notice) ของบริการนี้",
        "3. สิทธิประโยชน์",
        "3.1 การสมัครใช้บริการ บริษัทอาจจัดกิจกรรมส่งเสริมการขาย นำเสนอสินค้าหรือบริการเพื่อตอบสนองความต้องการของผู้ใช้บริการ",
        "3.2 สิทธิประโยชน์ที่บริษัทเสนอให้แก่ผู้ใช้บริการแต่ละรายอาจแตกต่างกัน ขึ้นอยู่กับพื้นที่การใช้บริการ และ/หรือ นโยบายทางการตลาดของบริษัท",
        "4. การใช้งานบริการต่างๆ ในเว็บไซต์ การสมัครไรเดอร์ 7-delivery",
        "ในการเข้าใช้บริการต่างๆ ที่ปรากฏอยู่ในเว็บไซต์ การสมัครไรเดอร์ 7-delivery นั้น นอกจากผู้ใช้บริการต้องปฏิบัติตามเงื่อนไขการใช้บริการนี้แล้ว ผู้ใช้บริการต้องปฏิบัติตามเงื่อนไขการใช้บริการเฉพาะของบริการนั้นๆ ด้วย",
        "5. การรักษาความปลอดภัย",
        "ผู้ใช้บริการตกลงเก็บรักษาชื่อบัญชีผู้ใช้ รหัสผ่าน และข้อมูลใดๆ ของตนไว้เป็นความลับ และป้องกันหรือไม่ยินยอมให้ผู้อื่นสามารถเข้าใช้บัญชีได้ ที่เกิดขึ้นจากการเกิดใช้บัญชีดังกล่าว",
        "6. การกระทำอันขัดต่อกฎหมาย",
        "ผู้ใช้บริการตกลงว่าจะไม่กระทำการใดๆ ต่อเว็บไซต์ การสมัครไรเดอร์ 7-delivery อันขัดต่อกฎหมายต่างๆ หรือทำให้บริษัทได้รับความเสียหาย ซึ่งรวมถึงแต่ไม่จำกัดเพียงการกระทำดังต่อไปนี้",
        "6.1 ห้ามผู้ใช้บริการคัดลอก ดัดแปลง ดาวน์โหลด แจกจ่าย หรือเผยแพร่งานอันมีลิขสิทธิ์ เครื่องหมายการค้า/เครื่องหมายบริการ หรือสิทธิบัตร (รวมเรียกว่า “ทรัพย์สินทางปัญญา”) ที่ปรากฎอยู่ในเว็บไซต์ การสมัครไรเดอร์ 7-delivery โดยไม่ได้รับอนุญาตจากบริษัท และการนำเข้างานทรัพย์สินทางปัญญาของผู้อื่น ในลักษณะที่เป็นการละเมิดต่อสิทธิในทรัพย์สินทางปัญญาของบริษัทและ/หรือผู้อื่น อันขัดต่อกฎหมายทรัพย์สินทางปัญญา",
        "6.2 ห้ามผู้ใช้บริการกระทำการใดๆ ที่อาจส่งผลกระทบต่อการใช้งานตามปกติ ความปลอดภัย และความสมบูรณ์ของการใช้งานเว็บไซต์ การสมัครไรเดอร์ 7-delivery การพยายามหรือการเข้าถึงบัญชีของผู้ใช้บริการรายอื่น อันขัดต่อกฎหมายว่าด้วยการกระทำความผิดทางคอมพิวเตอร์ หากผู้ใช้บริการกระทำการใดๆ ที่ส่งผลกระทบต่อบริษัทหรือผู้ที่เกี่ยวข้อง ผู้ใช้บริการตกลงรับผิดชอบต่อความเสียหายใดๆ ที่เกิดขึ้น โดยบริษัทขอสงวนสิทธิ์ในการพิจารณาดำเนินการทางกฎหมาย",
        "6.3 ห้ามผู้ใช้บริการกระทำใดๆ ที่เป็นการทุจริตผิดกฎหมาย ก่อและช่วยเหลืออาชญากรรมใดๆ",
        "ทั้งนี้ บริษัทสงวนสิทธิ์ในการระงับหรือยกเลิกบัญชีผู้ใช้งานที่มีการกระทำมิชอบ ผิดสัญญา หรือมีส่วนต้องสงสัยที่จะมีการกระทำที่ผิดตามกฎหมายและดำเนินคดีตามกฎหมายต่อไป",
        "7. ข้อจำกัดความรับผิดของบริษัท",
        "บริษัทขอสงวนสิทธิ์ในการรับผิดในกรณีดังต่อไปนี้",
        "7.1 ความเสียหายต่อผู้ใช้บริการ ในกรณีที่ผู้ใช้บริการเข้าใช้งานเว็บไซต์ การสมัครไรเดอร์ 7-delivery ผ่านทางลิงก์เชื่อมต่ออื่น เช่น ผ่านทางการค้นหาจากโปรแกรมการค้นหา (Search Engine)",
        "7.2 การที่ผู้ใช้บริการไม่สามารถเข้าใช้งานเว็บไซต์ การสมัครไรเดอร์ 7-deliveryได้ เนื่องจากอุปกรณ์ ซอฟต์แวร์ หรือการเชื่อมต่ออินเตอร์เน็ตของผู้ใช้บริการไม่รองรับการใช้งาน รวมถึงปัญหาทางเทคนิค ความผิดพลาดและความล้มเหลวอื่นในการเชื่อมต่อกับเว็บไซต์",
        "7.3 บริษัทสงวนสิทธิ์ในการระงับ ยกเลิก หรือเปลี่ยนแปลงเงื่อนไขการให้สิทธิประโยชน์หากมีการกระทำที่ต้องสงสัยหรืออาจมีการทุจริตกระทำผิดกฎหมาย หรือผิดเงื่อนไขของการให้สิทธิประโยชน์โดยไม่ต้องแจ้งให้ทราบล่วงหน้า",
        "8. การเชื่อมโยงไปยังแอปพลิเคชันหรือเว็บไซต์อื่น",
        "ผู้ใช้บริการรับทราบและตกลงว่าเว็บไซต์ การสมัครไรเดอร์ 7-delivery มีการเชื่อมต่อไปยังเว็บไซต์หรือแอปพลิเคชันของบริษัทในกลุ่ม หรือของบุคคลภายนอกซึ่งเป็นเจ้าของบริการนั้น ซึ่งเว็บไซต์หรือแอปพลิเคชันเหล่านี้ไม่อยู่ภายใต้การควบคุมของบริษัท บริษัทไม่รับผิดชอบต่อการดำเนินธุรกรรมของผู้ใช้บริการในเว็บไซต์หรือแอปพลิเคชันนั้น ผู้ใช้บริการควรศึกษาข้อกำหนดและเงื่อนไขการใช้บริการเว็บไซต์หรือแอปพลิเคชันที่ผู้ใช้บริการได้เข้าถึงก่อนการใช้บริการ",
        "9. การแก้ไขเปลี่ยนแปลง",
        "ข้อกำหนดและเงื่อนไขการใช้บริการนี้ อาจมีการแก้ไขเปลี่ยนแปลงเป็นครั้งคราวโดยไม่แจ้งล่วงหน้าให้ผู้ใช้บริการทราบ โดยจะประกาศไว้ที่เว็บไซต์ การสมัครไรเดอร์ 7-delivery ร้านเซเว่นอีเลฟเว่น หรือช่องทางอื่นใดที่บริษัทเห็นสมควร",
        "10. ความสมบูรณ์ของข้อกำหนด",
        "หากเงื่อนไขการใช้บริการนี้ข้อใดหรือส่วนใดส่วนหนึ่งไม่เป็นไปตามกฎหมาย ไม่มีผลสมบูรณ์ หรือไม่สามารถบังคับใช้ได้ ไม่ว่าจะภายใต้ระเบียบ กฎเกณฑ์ หรือกฎหมายใด ให้ข้อตกลงและเงื่อนไขข้อนั้นหรือส่วนใดส่วนหนึ่งของเงื่อนไขดังกล่าวซึ่งไม่เป็นไปตามกฎหมาย ไม่มีผลสมบูรณ์ หรือไม่สามารถบังคับใช้ ไม่ถือเป็นส่วนหนึ่งของเงื่อนไขการให้บริการนี้ โดยข้อกำหนดดังกล่าวไม่กระทบต่อความถูกต้องตามกฎหมาย การมีผลสมบูรณ์ หรือความสามารถในการบังคับใช้ส่วนอื่น ๆ ที่เหลือของเงื่อนไขการให้บริการนี้",
        "11. ภาษาและกฎหมายที่ใช้บังคับ",
        "เงื่อนไขการใช้บริการฉบับนี้ให้ใช้ภาษาไทยเป็นภาษาที่ใช้บังคับ การแปลความหมาย การตีความ ความสมบูรณ์ และการปฏิบัติตามเงื่อนไขการใช้บริการฉบับนี้ ให้เป็นไปตามที่กำหนดไว้ภายใต้บังคับของกฎหมายไทย และให้ศาลไทยเป็นศาลที่มีอำนาจในการพิจารณาคดี",
        "12. การยื่นข้อร้องเรียน",
        "หากมีข้อร้องเรียนใดๆ เกี่ยวกับการใช้บริการดังกล่าว สามารถแจ้งได้ที่ศูนย์บริการลูกค้าสัมพันธ์ของบริษัท ดังนี้",
        "เบอร์โทรศัพท์ 02-826-7744",
        "อีเมล faq@7eleven.co.th"
    ],
    buttonsuccess : "ยินยอม",
    buttonclose : "ปิด"

}
