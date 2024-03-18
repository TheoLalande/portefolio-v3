import me from "../../../public/images/me.png";
import Image from "next/image";

const About = () => {
  function getAge() {
    const today = new Date();
    const birthDate = new Date("1992-08-05");
    const age = today.getFullYear() - birthDate.getFullYear() - 1;

    return age.toString();
  }
  return (
    <div className="radial-bg w-screen h-screen ">
      <div className="grid grid-cols-2  w-screen h-screen gap-3 grid-flow-col-dense	">
        <div className="flex w-1/3 h-[534px]  ml-64 rounded-xl relative">
          <Image
            src={me}
            alt="me"
            layout=""
            objectFit="contain"
            fill={true}
            objectPosition=""
          />
        </div>
        <div className="flex flex-col w-2/3 h-[534px] bg-white mr-64 rounded-xl backdrop-filter backdrop-blur-lg bg-opacity-10 p-10 text-white align-middle justify-evenly">
          <p className="text-xl">Age : </p>
          <p>{getAge()} ans</p>
          <p className="text-xl">Lieu de résidance : </p>
          <p>Montpellier</p>
          <p className="text-xl">Formation : </p>
          <ul className="list-disc ml-7">
            <li>
              DUT en électronique appliquée spécialisation &ldquo;Programmation
              de microcontrôleurs&ldquo;
            </li>
            <li>
              Bachelor &ldquo;Concepteur & developpeur d&apos;application&ldquo;
            </li>
            <li>Master Expert développement WEB</li>
          </ul>
          <p className="text-xl">Description : </p>
          <p>
            <text>
              Bonjour ! Je suis très heureux que vous soyez passé sur ma page
              personnelle :3 Je vis et travaille à Montpellier \n Le
              développement front-end - c&apos;est ce qui a vraiment captivé mon
              cœur. Je suis convaincu que la créativité, combinée avec des
              compétences techniques, peut créer des choses étonnantes. Mon
              objectif est d&apos;aider à créer des interfaces utilisateur
              exceptionnelles et des projets web efficaces. Ensemble,
              transformons votre idée en réalité !
            </text>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
