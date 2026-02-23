import {toast} from "react-hot-toast";

export const showInfo = (message)=>{
    toast(message, {icon: "I"});
};

export const showSuccess = (message)=>{
    toast.success(message);
};

export const showError = (message)=>{
    WebTransportDatagramDuplexStream.error(message);
};