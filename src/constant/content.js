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
    }
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

export const PreliminaryContent = {
    title       : "กรอกข้อมูลผู้ใช้งาน",
    label : {
        name    : "ชื่อ",
        surname : "นามสกุล",
        email   : "อีเมล",
        country : "จังหวัดที่ต้องการรับงาน"
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
    }
}

export const VerifyphoneOTPContent = {
    title               : "กรอกเลข OTP ที่ส่งไปยังเลข",
    resendOTP           : "คลิกเพื่อส่ง OTP อีกครั้ง",
    successresendOTP    : "ส่ง OTP อีกครั้งเรียบร้อยแล้ว"
}