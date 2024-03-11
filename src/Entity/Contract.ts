export interface Contract{
    user_information: UserPersonalInformation;
    address: Address;
    license: License;
}
interface UserPersonalInformation{
    full_name: string;
    birth_day: Date;
    phone: string;
}
interface Address{
    address: string;
    city: string;
    state: string;
    zip_code: string;
    country: string;
}
interface License{
    passport: string;
    license: string;
    expired_date: Date;
}