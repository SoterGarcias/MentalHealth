import { v4 as uuid } from "uuid";
import { getDocs } from 'firebase/firestore/lite';

export const products = [
  {
    id: '96ca9009-e91d-41fb-96f1-e214e490ed19',
    createdAt: "27/03/2019",
    description:
      "Alana é uma psicóloga altamente qualificada e experiente que ajuda seus pacientes a descobrir seus próprios caminhos para a saúde mental e a felicidade. Ela é compassiva e compreensiva, criando um espaço seguro e acolhedor para seus clientes abrirem seus corações e compartilharem suas preocupações mais profundas.",
    profileImageUrl: "/static/images/psicologos/Alana.png",
    firstName: "Alana",
    totalReviews: "594",
    notaEstrelas: "4.5",
  },
  {
    id: uuid(),
    createdAt: "31/03/2019",
    description:
      "Amanda é uma psicóloga que se destaca por sua paixão em ajudar seus pacientes a encontrar o equilíbrio emocional e a superar seus desafios pessoais. Ela é gentil, acolhedora e atenta, criando um espaço seguro para seus pacientes explorarem suas emoções e pensamentos de maneira honesta e sem julgamentos.",
    profileImageUrl: "/static/images/psicologos/Amanda.png",
    firstName: "Amanda",
    totalReviews: "625",
    notaEstrelas: "4.8",
  },
  {
    id: uuid(),
    createdAt: "03/04/2019",
    description:
      "Angelo é um psicólogo dedicado e atencioso que tem paixão em ajudar seus pacientes a alcançarem a saúde mental e emocional. Ele é um ouvinte paciente e atento, criando um ambiente seguro e acolhedor para seus pacientes explorarem seus pensamentos e emoções mais profundos.",
    profileImageUrl: "/static/images/psicologos/Angelo.png",
    firstName: "Angelo",
    totalReviews: "857",
    notaEstrelas: "4.2",
  },
  {
    id: uuid(),
    createdAt: "04/04/2019",
    description:
      "Bem é um psicólogo experiente e compassivo, que acredita na importância de fornecer um espaço seguro e acolhedor para seus pacientes. Ele é dedicado em ajudar as pessoas a superarem seus desafios emocionais e psicológicos, e trabalha com elas para desenvolver habilidades práticas para enfrentar a vida.",
    profileImageUrl: "/static/images/psicologos/Bem.png",
    firstName: "Bem",
    totalReviews: "406",
    notaEstrelas: "4.9",
  },
  {
    id: uuid(),
    createdAt: "04/04/2019",
    description:
      "Clara é uma psicóloga apaixonada e dedicada que se preocupa profundamente com seus pacientes. Ela é uma ouvinte atenta e compassiva, que trabalha com seus pacientes para ajudá-los a encontrar soluções práticas para seus desafios emocionais e psicológicos.",
    profileImageUrl: "/static/images/psicologos/Clara.png",
    firstName: "Clara",
    totalReviews: "835",
    notaEstrelas: "4.0",
  },
  {
    id: uuid(),
    createdAt: "04/04/2019",
    description:
      "Craig é um psicólogo habilidoso e experiente que trabalha com seus pacientes para ajudá-los a superar seus desafios emocionais e psicológicos. Ele é um ouvinte atento e compassivo, criando um ambiente seguro e acolhedor para seus pacientes explorarem seus pensamentos e sentimentos mais profundos.",
    profileImageUrl: "/static/images/psicologos/Craig.png",
    firstName: "Craig",
    totalReviews: "835",
    notaEstrelas: "4.9",
  },
  {
    id: uuid(),
    createdAt: "04/04/2019",
    description:
      "Fabíola é uma psicóloga apaixonada e dedicada, que se preocupa profundamente com o bem-estar emocional de seus pacientes. Ela é uma ouvinte atenta e compassiva, que trabalha com seus pacientes para ajudá-los a superar seus desafios emocionais e a encontrar uma vida plena e satisfatória.",
    profileImageUrl: "/static/images/psicologos/Fabiola.png",
    firstName: "Fabiola",
    totalReviews: "835",
    notaEstrelas: "4.3",
  },
  {
    id: uuid(),
    createdAt: "04/04/2019",
    description:
      "Fernanda é uma psicóloga experiente e altamente treinada, que trabalha com seus pacientes para ajudá-los a superar seus desafios emocionais e psicológicos. Ela é uma ouvinte atenta e compassiva, que cria um ambiente seguro e acolhedor para que seus pacientes se sintam à vontade para compartilhar seus pensamentos e sentimentos mais profundos.",
    profileImageUrl: "/static/images/psicologos/Fernanda.png",
    firstName: "Fernanda",
    totalReviews: "835",
    notaEstrelas: "4.5",
  },
  {
    id: uuid(),
    createdAt: "04/04/2019",
    description:
      "Jacinto é um psicólogo experiente e altamente treinado, que trabalha com seus pacientes para ajudá-los a alcançar seus objetivos emocionais e psicológicos. Ele é um ouvinte atento e compassivo, que cria um ambiente seguro e acolhedor para seus pacientes explorarem seus pensamentos e sentimentos mais profundos.",
    profileImageUrl: "/static/images/psicologos/Jacinto-Diego.png",
    firstName: "Jacinto",
    totalReviews: "835",
    notaEstrelas: "4.5",
  },
  {
    id: uuid(),
    createdAt: "04/04/2019",
    description:
      "José é um psicólogo experiente e dedicado, que trabalha com seus pacientes para ajudá-los a superar seus desafios emocionais e psicológicos. Ele é um ouvinte atento e compassivo, que se preocupa profundamente com o bem-estar emocional de seus pacientes e cria um ambiente seguro e acolhedor para que eles possam explorar seus pensamentos e sentimentos mais profundos.",
    profileImageUrl: "/static/images/psicologos/Jose.png",
    firstName: "José",
    totalReviews: "835",
    notaEstrelas: "5.0",
  },
  {
    id: uuid(),
    createdAt: "04/04/2019",
    description:
      "Jurací é um psicólogo empático e compreensivo, que trabalha com seus pacientes para ajudá-los a lidar com seus desafios emocionais e psicológicos. Ele é um ouvinte atento e compassivo, que ajuda seus pacientes a explorar seus pensamentos e sentimentos mais profundos, e oferece orientação e suporte para ajudá-los a superar esses desafios.",
    profileImageUrl: "/static/images/psicologos/Juraci.png",
    firstName: "Jurací",
    totalReviews: "835",
    notaEstrelas: "4.7",
  },
  {
    id: uuid(),
    createdAt: "04/04/2019",
    description:
      "Larissa é uma psicóloga apaixonada e dedicada, que se preocupa profundamente com o bem-estar emocional de seus pacientes. Ela é uma ouvinte atenta e compassiva, que trabalha com seus pacientes para ajudá-los a superar seus desafios emocionais e a encontrar uma vida plena e satisfatória.",
    profileImageUrl: "/static/images/psicologos/Larissa.png",
    firstName: "Larissa",
    totalReviews: "835",
    notaEstrelas: "4.8",
  },
  {
    id: uuid(),
    createdAt: "04/04/2019",
    description:
      "Leonardo é um psicólogo experiente e altamente treinado, que trabalha com seus pacientes para ajudá-los a alcançar seus objetivos emocionais e psicológicos. Ele é um ouvinte atento e compassivo, que cria um ambiente seguro e acolhedor para seus pacientes explorarem seus pensamentos e sentimentos mais profundos.",
    profileImageUrl: "/static/images/psicologos/Leonardo.png",
    firstName: "Leonardo",
    totalReviews: "835",
    notaEstrelas: "4.4",
  },
  {
    id: uuid(),
    createdAt: "04/04/2019",
    description:
      "Liz é uma psicóloga apaixonada e dedicada, que se preocupa profundamente com o bem-estar emocional de seus pacientes. Ela é uma ouvinte atenta e compassiva, que trabalha com seus pacientes para ajudá-los a superar seus desafios emocionais e a alcançar seus objetivos pessoais e profissionais.",
    profileImageUrl: "/static/images/psicologos/Liz.png",
    firstName: "Liz",
    totalReviews: "835",
    notaEstrelas: "5.0",
  },
  {
    id: uuid(),
    createdAt: "04/04/2019",
    description:
      "Lucas é um psicólogo habilidoso e dedicado, que se preocupa profundamente com o bem-estar emocional de seus pacientes. Ele é um ouvinte atento e compassivo, que ajuda seus pacientes a explorarem seus pensamentos e sentimentos mais profundos, e oferece orientação e suporte para ajudá-los a superar seus desafios emocionais.",
    profileImageUrl: "/static/images/psicologos/Lucas.png",
    firstName: "Lucas",
    totalReviews: "835",
    notaEstrelas: "4.2",
  },
  {
    id: uuid(),
    createdAt: "04/04/2019",
    description:
      "Paulo é um psicólogo compassivo e experiente, que ajuda seus pacientes a explorarem seus pensamentos e sentimentos mais profundos. Ele é um ouvinte atento e empático, que cria um ambiente seguro e acolhedor para seus pacientes se abrirem sobre seus desafios emocionais e psicológicos.",
    profileImageUrl: "/static/images/psicologos/Paulo.png",
    firstName: "Paulo",
    totalReviews: "835",
    notaEstrelas: "4.2",
  },
  {
    id: uuid(),
    createdAt: "04/04/2019",
    description:
      "Sandra é uma psicóloga empática e dedicada, que se preocupa profundamente com o bem-estar emocional de seus pacientes. Ela é uma ouvinte atenta e compassiva, que ajuda seus pacientes a explorarem seus pensamentos e sentimentos mais profundos, e oferece orientação e suporte para ajudá-los a superar seus desafios emocionais.",
    profileImageUrl: "/static/images/psicologos/Sandra.png",
    firstName: "Sandra",
    totalReviews: "835",
    notaEstrelas: "4.7",
  },
  {
    id: uuid(),
    createdAt: "04/04/2019",
    description:
      "Sofia é uma psicóloga altamente treinada e empática, que ajuda seus pacientes a explorarem suas emoções e a desenvolverem habilidades práticas para lidar com seus desafios emocionais. Ela é uma ouvinte atenta e compassiva, que trabalha com seus pacientes para criar um ambiente seguro e acolhedor para discutir seus problemas mais profundos.",
    profileImageUrl: "/static/images/psicologos/Sofia.png",
    firstName: "Sofia",
    totalReviews: "835",
    notaEstrelas: "4.9",
  },
  {
    id: uuid(),
    createdAt: "04/04/2019",
    description:
      "Valentina é uma psicóloga apaixonada e dedicada, que se preocupa profundamente com o bem-estar emocional de seus pacientes. Ela é uma ouvinte atenta e empática, que ajuda seus pacientes a explorarem seus pensamentos e sentimentos mais profundos e oferece orientação e suporte para ajudá-los a superar seus desafios emocionais.",
    profileImageUrl: "/static/images/psicologos/Valentina.png",
    firstName: "Valentina",
    totalReviews: "835",
    notaEstrelas: "4.1",
  },
];


export const psicologos = JSON.parse(JSON.stringify(products));
