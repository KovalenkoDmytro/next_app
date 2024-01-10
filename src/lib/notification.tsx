import Swal from "sweetalert2";

type Flash = {
    type: 'success' | 'error' | 'warning' | 'info' | 'question' ; 
    message: {} | string;
}

export default function toShowNotification (flash: Flash ,settings ? : {}) {
    let message = flash.message
    if(typeof message === "object"){
        message = Object.values(message).join("\n")
    }
    
    Swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        icon: flash.type,
        title: message,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        },
        ...settings,
    })
}
