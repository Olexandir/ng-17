export interface UserDTO {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressDTO;
  phone: string;
  website: string;
  company: CompanyDTO;
}

interface AddressDTO {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

interface CompanyDTO {
  name: string;
  catchPhrase: string;
  bs: string;
}
