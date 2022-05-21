import faker from "@faker-js/faker";

interface UserData {
    id: string
    first_name: string
    last_name: string
    email: string 
    phone_number: string
    gender: string
    street_address: string 
    created_at: Date
    updated_at: Date
}

export const generateUserData = () => {
    const payload: UserData = {
        id: faker.datatype.uuid(),
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        email: faker.internet.email(),
        phone_number: faker.phone.phoneNumberFormat(),
        gender: faker.name.gender(true),
        street_address: faker.address.streetAddress(),
        created_at: faker.date.recent(),
        updated_at: faker.date.recent()
    }

    return payload;
}