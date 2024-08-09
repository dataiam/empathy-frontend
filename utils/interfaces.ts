type InputProps = {
    id: string;
    placeholder: string;
    type: string;
    isRequired?:boolean;
};

type ButtonProps = {
    id?: string;
    title: string;
    type: any;
    classValue:string;
};

type ButtonIconProps = {
    id?: string;
    title: string;
    type: any;
    btnClass:string;
    iconClass:string;
};

type ButtonImageProps = {
    id?: string;
    title: string;
    type: any;
    btnClass:string;
    imgClass:string;
    url:any;
    alt:string;
    width:any;
    height:any;
};

type Badge = {
    title:string;
    badgeClass:string;
};

type createJobModal = {
    modalId:string;
    modalLabel:string;
}

type radioBtnProps = {
    name:string;
    title:string;
    isChecked:boolean;
}

type TokenResponse = {
    token: string;
    refresh_token: string;
}

type UserResponse = {
    id: string;
    name: string;
    email: string;
}

type CreateJobFormData = {
    jobName:string,
    uploadedFile?:FileList;
}
