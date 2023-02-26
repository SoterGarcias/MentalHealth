import { v4 as uuid } from 'uuid';

export const customers = [
  {
    id: uuid(),
    address: {
    country: 'Canada',
    state: 'Ontario',
    city: 'Toronto',
    street: '123 Main Street'
    },
    avatarUrl: '/static/images/avatars/avatar_1.png',
    createdAt: 1645640400000,
    email: 'johndoe@example.com',
    name: 'John Doe',
    phone: '416-555-1234',
    management: 'Software Development',
    sectionsWeek: 2
    },
    {
    id: uuid(),
    address: {
    country: 'USA',
    state: 'California',
    city: 'Los Angeles',
    street: '456 Hollywood Blvd'
    },
    avatarUrl: '/static/images/avatars/avatar_2.png',
    createdAt: 1632190800000,
    email: 'janedoe@example.com',
    name: 'Jane Doe',
    phone: '310-555-5678',
    management: 'Marketing',
    sectionsWeek: 2
    },
    {
    id: uuid(),
    address: {
    country: 'Germany',
    state: 'Berlin',
    city: 'Berlin',
    street: 'Unter den Linden 16'
    },
    avatarUrl: '/static/images/avatars/avatar_3.png',
    createdAt: 1609501200000,
    email: 'hansmuller@example.com',
    name: 'Hans Müller',
    phone: '+49 30 1234567',
    management: 'Sales',
    sectionsWeek: 2
    },
    {
    id: uuid(),
    address: {
    country: 'Japan',
    state: 'Tokyo',
    city: 'Minato City',
    street: '1-1-1 Shibaura'
    },
    avatarUrl: '/static/images/avatars/avatar_4.png',
    createdAt: 1577835600000,
    email: 'takahashi@example.com',
    name: 'Taro Takahashi',
    phone: '+81 3 1234 5678',
    management: 'Operations',
    sectionsWeek: 2
    },
    {
    id: uuid(),
    address: {
    country: 'USA',
    state: 'New York',
    city: 'New York City',
    street: '1 Times Square'
    },
    avatarUrl: '/static/images/avatars/avatar_5.png',
    createdAt: 1559326800000,
    email: 'amysmith@example.com',
    name: 'Amy Smith',
    phone: '212-555-1212',
    management: 'Human Resources',
    sectionsWeek: 2
    },
    {
    id: uuid(),
    address: {
    country: 'Australia',
    state: 'New South Wales',
    city: 'Sydney',
    street: '1 Oxford Street'
    },
    avatarUrl: '/static/images/avatars/avatar_6.png',
    createdAt: 1538533200000,
    email: 'johnsmith@example.com',
    name: 'John Smith',
    phone: '+61 2 1234 5678',
    management: 'Product Management',
    sectionsWeek: 3
    },
    {
    id: uuid(),
    address: {
    country: 'Canada',
    state: 'Quebec',
    city: 'Montreal',
    street: '1234 Rue St. Catherine'
    },
    avatarUrl: '/static/images/avatars/avatar_7.png',
    createdAt: 1514764800000,
    email: 'juliebaker@example.com',
    name: 'Julie Baker',
    phone: '514-555-1234',
    management: 'Finance',
    sectionsWeek: 1
    },
    {
      id: uuid(),
      address: {
        country: 'Brazil',
        state: 'São Paulo',
        city: 'São Paulo',
        street: 'Av. Paulista, 1578'
      },
      avatarUrl: '/static/images/avatars/avatar_1.png',
      createdAt: 1645639200000,
      email: 'ana.silva@gmail.com',
      name: 'Ana Silva',
      phone: '+55 (11) 91234-5678',
      management: 'Marketing',
      sectionsWeek: 0
    },
    {
      id: uuid(),
      address: {
        country: 'Brazil',
        state: 'Rio de Janeiro',
        city: 'Rio de Janeiro',
        street: 'Rua do Lavradio, 71'
      },
      avatarUrl: '/static/images/avatars/avatar_2.png',
      createdAt: 1645552800000,
      email: 'jose.santos@yahoo.com',
      name: 'José Santos',
      phone: '+55 (21) 99876-5432',
      management: 'Sales',
      sectionsWeek: 0
    },
    {
      id: uuid(),
      address: {
        country: 'Brazil',
        state: 'Minas Gerais',
        city: 'Belo Horizonte',
        street: 'Av. Afonso Pena, 1212'
      },
      avatarUrl: '/static/images/avatars/avatar_3.png',
      createdAt: 1645552800000,
      email: 'maria.souza@hotmail.com',
      name: 'Maria Souza',
      phone: '+55 (31) 98765-4321',
      management: 'Human Resources',
      sectionsWeek: 3
    },
    {
      id: uuid(),
      address: {
        country: 'Brazil',
        state: 'Pernambuco',
        city: 'Recife',
        street: 'Rua da Aurora, 435'
      },
      avatarUrl: '/static/images/avatars/avatar_4.png',
      createdAt: 1645293600000,
      email: 'antonio.oliveira@gmail.com',
      name: 'Antonio Oliveira',
      phone: '+55 (81) 91234-5678',
      management: 'IT',
      sectionsWeek: 3
    },
    {
      id: uuid(),
      address: {
        country: 'Brazil',
        state: 'Bahia',
        city: 'Salvador',
        street: 'Rua Carlos Gomes, 58'
      },
      avatarUrl: '/static/images/avatars/avatar_5.png',
      createdAt: 1645207200000,
      email: 'luciana.fernandes@yahoo.com',
      name: 'Luciana Fernandes',
      phone: '+55 (71) 99876-5432',
      management: 'Finance',
      sectionsWeek: 2
    },
    {
      id: uuid(),
      address: {
        country: 'Brazil',
        state: 'Ceará',
        city: 'Fortaleza',
        street: 'Av. Santos Dumont, 3333'
      },
      avatarUrl: '/static/images/avatars/avatar_6.png',
      createdAt: 1645120800000,
      email: 'pedro.silveira@hotmail.com',
      name: 'Pedro Silveira',
      phone: '+55 (85) 98765-4321',
      management: 'Marketing',
      sectionsWeek: 0
    },
];
