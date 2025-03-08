export interface SignInPayload {
  email: string;
  password: string;
}

export interface SignUpPayload {
  name: string;
  password: string;
  gender: string;
  birthDate?: Date;
  contactNumber: string;
  address: string;
  locationName: string;
  wardName: string;
  email: string;
}

export interface UpdateProfilePayload {
  name: string;
  gender: string;
  birthDate?: Date;
  contactNumber: string;
  address: string;
  locationName: string;
  wardName: string;
  email: string;
}

export interface User {
  id?: number;
  code?: string;
  name?: string;
  gender?: string;
  contactNumber?: string;
  address?: string;
  retailerId?: number;
  branchId?: number;
  locationName?: string;
  wardName?: string;
  modifiedDate?: Date;
  createdDate?: Date;
  avatar?: string;
  email?: string;
}

export interface SelectParams {
  id: number;
  name: string;
  value: string;
}
