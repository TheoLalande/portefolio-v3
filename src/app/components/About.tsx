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
    <div className="radial-bg w-screen h-screen" id="aboutPage">
      <div className="flex  w-screen h-screen gap-3 	relative justify-center items-center ">
        <div className="hidden md:hidden lg:flex  w-1/3 h-[534px]  ml-64 rounded-xl relative">
          <Image
            src={me}
            alt="me"
            layout=""
            objectFit="contain"
            fill={true}
            objectPosition=""
          />
        </div>
        <div className="flex flex-col sm:w-full md:w-full lg:w-2/3 h-[480px] md:h-[534px] lg:h-[534px] bg-white lg:mr-64 mx-5 md:mx-5 mt-20 rounded-xl backdrop-filter backdrop-blur-lg bg-opacity-10 p-10 text-white lg:align-middle lg:justify-evenly">
          <p className="text-sm lg:text-xl">Age : </p>
          <p className="text-xs lg:text-base">{getAge()} ans</p>
          <p className="text-sm lg:text-xl">Lieu de résidance : </p>
          <p className="text-xs lg:text-base">Montpellier</p>
          <p className="text-sm lg:text-xl">Formation : </p>
          <ul className="list-disc ml-7">
            <li className="text-xs lg:text-base">
              DUT en électronique appliquée spécialisation &ldquo;Programmation
              de microcontrôleurs&ldquo;
            </li>
            <li className="text-xs lg:text-base">
              Bachelor &ldquo;Concepteur & developpeur d&apos;application&ldquo;
            </li>
            <li className="text-xs lg:text-base">
              Master Expert développement WEB
            </li>
          </ul>
          <p className="text-sm lg:text-xl">Description : </p>
          <p className="text-xs lg:text-base">
            <text>
              Bonjour ! Je suis très heureux que vous soyez passé sur ma page
              personnelle :3 Je vis et travaille Montpellierà \n Le
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
