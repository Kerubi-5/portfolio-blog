import { Layout } from "components/common";
import { ExternalLink } from "components/icons";
import { Card } from "components/post";
import Link from "next/link";
import { ReactNode } from "react";

type ServiceCard = {
  title: string;
  description: string;
  url: string;
};

type Section = {
  title: string;
  description: string;
  children: ReactNode;
};

const Home = () => {
  const ServicesCard = ({ title, description, url }: ServiceCard) => {
    return (
      <article className="py-5 px-10 bg-gray-200 text-center rounded-lg flex flex-col justify-between">
        <h3 className="text-3xl font-medium mb-3">{title}</h3>
        <p>{description}</p>
        <Link href={url}>
          <a className="flex gap-2 justify-center p-3 bg-blue-500 hover:bg-blue-600 transition-colors text-white rounded-lg mt-5">
            Click to learn more{" "}
            <ExternalLink width="20px" height="20px" fill="white" />
          </a>
        </Link>
      </article>
    );
  };

  const Section = ({ title, description, children }: Section) => {
    return (
      <section className="flex flex-col justify-center items-center mb-10 lg:mt-5">
        <div className="py-5 text-center">
          <h2 className="text-5xl bg-clip-text text-transparent primary-gradient font-bold mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-500">{description}</p>
        </div>
        {children}
      </section>
    );
  };

  return (
    <div className="py-5">
      <header className="flex items-center justify-center sm:gap-20 flex-wrap mb-10">
        <div className="py-5 max-w-[450px] text-center">
          <h2 className="text-5xl bg-clip-text text-transparent primary-gradient font-bold mb-6">
            Hi, Im Kim.
            <br />A Web Developer
          </h2>
          <p className="text-xl text-gray-500">
            Im also a Freelancer, Game Enthusiast, and many more...
          </p>
        </div>
        <HeaderSVG />
      </header>
      <Section
        title="My Services"
        description="I offer a wide range of services, from web development to game development."
      >
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          <ServicesCard
            title="Web Design"
            description="I can create simple website designs with trending css designs and modern techniques"
            url="/web-design"
          />
          <ServicesCard
            title="Web Development"
            description="I build websites and web apps."
            url="/web-development"
          />
          <ServicesCard
            title="Web3"
            description="I can also dabble in the newest technology trend which is creating decentralized applications"
            url="/web3"
          />
        </div>
      </Section>
      <Section
        title="About Me"
        description="The developer behind the creation of this website"
      >
        <div className="relative overflow-hidden h-full w-full">
          <ThinkingSVG />
        </div>
      </Section>
    </div>
  );
};

Home.Layout = Layout;

export default Home;

const HeaderSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      width="655"
      height="250"
      viewBox="0 0 655 413.67951"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className=""
    >
      <path
        d="M689.063,372.583a122.04116,122.04116,0,0,1,10.10051-38.51722q2.27961-5.09249,5.01812-9.96076a.7438.7438,0,0,0-1.28354-.75026,123.7286,123.7286,0,0,0-13.7678,37.98231q-1.03367,5.58355-1.55378,11.24593c-.08811.95214,1.39893.94613,1.48649,0Z"
        transform="translate(-272.5 -243.16024)"
        fill="#e6e6e6"
      />
      <circle cx="435.2819" cy="73.9144" r="9.4144" fill="#e6e6e6" />
      <path
        d="M690.026,372.83307a79.17357,79.17357,0,0,1,6.55267-24.98791q1.47888-3.30374,3.25549-6.462a.48254.48254,0,0,0-.83269-.48673,80.26825,80.26825,0,0,0-8.93182,24.6409q-.67059,3.6223-1.008,7.29575c-.05716.6177.90755.6138.96436,0Z"
        transform="translate(-272.5 -243.16024)"
        fill="#e6e6e6"
      />
      <circle cx="429.66984" cy="93.66195" r="6.10756" fill="#e6e6e6" />
      <path
        d="M688.80883,372.25653a79.17368,79.17368,0,0,1-10.2024-23.73277q-.86592-3.51453-1.40764-7.09749a.48253.48253,0,0,0-.95592.12838,80.26823,80.26823,0,0,0,8.11306,24.92247q1.69918,3.26856,3.69253,6.37254c.33485.5222,1.09311-.07422.76037-.59313Z"
        transform="translate(-272.5 -243.16024)"
        fill="#e6e6e6"
      />
      <circle cx="403.73518" cy="93.23322" r="6.10756" fill="#e6e6e6" />
      <path
        d="M670.05906,377.66024v-12a4.50508,4.50508,0,0,1,4.5-4.5h28a4.50508,4.50508,0,0,1,4.5,4.5v12a4.50508,4.50508,0,0,1-4.5,4.5h-28A4.50508,4.50508,0,0,1,670.05906,377.66024Z"
        transform="translate(-272.5 -243.16024)"
        fill="#f2f2f2"
      />
      <path
        d="M701.55906,301.16024h-12a4.50507,4.50507,0,0,1-4.5-4.5v-49a4.50508,4.50508,0,0,1,4.5-4.5h12a4.50508,4.50508,0,0,1,4.5,4.5v49A4.50508,4.50508,0,0,1,701.55906,301.16024Z"
        transform="translate(-272.5 -243.16024)"
        fill="#f2f2f2"
      />
      <rect x="413.05906" y="9.5" width="20" height="4" fill="#ccc" />
      <rect x="413.05906" y="40.5" width="20" height="4" fill="#ccc" />
      <path
        d="M731.55906,301.16024h-12a4.50507,4.50507,0,0,1-4.5-4.5v-49a4.50508,4.50508,0,0,1,4.5-4.5h12a4.50508,4.50508,0,0,1,4.5,4.5v49A4.50508,4.50508,0,0,1,731.55906,301.16024Z"
        transform="translate(-272.5 -243.16024)"
        fill="#f2f2f2"
      />
      <rect x="443.05906" y="9.5" width="20" height="4" fill="#ccc" />
      <rect x="443.05906" y="40.5" width="20" height="4" fill="#ccc" />
      <path
        d="M761.55906,301.16024h-12a4.50507,4.50507,0,0,1-4.5-4.5v-49a4.50508,4.50508,0,0,1,4.5-4.5h12a4.50508,4.50508,0,0,1,4.5,4.5v49A4.50508,4.50508,0,0,1,761.55906,301.16024Z"
        transform="translate(-272.5 -243.16024)"
        fill="#f2f2f2"
      />
      <rect x="473.05906" y="9.5" width="20" height="4" fill="#ccc" />
      <rect x="473.05906" y="40.5" width="20" height="4" fill="#ccc" />
      <path
        d="M777.55906,382.16024h-12a4.50507,4.50507,0,0,1-4.5-4.5v-49a4.50508,4.50508,0,0,1,4.5-4.5h12a4.50508,4.50508,0,0,1,4.5,4.5v49A4.50508,4.50508,0,0,1,777.55906,382.16024Z"
        transform="translate(-272.5 -243.16024)"
        fill="#f2f2f2"
      />
      <rect x="489.05906" y="90.5" width="20" height="4" fill="#ccc" />
      <rect x="489.05906" y="121.5" width="20" height="4" fill="#ccc" />
      <path
        d="M807.55906,382.16024h-12a4.50507,4.50507,0,0,1-4.5-4.5v-49a4.50508,4.50508,0,0,1,4.5-4.5h12a4.50508,4.50508,0,0,1,4.5,4.5v49A4.50508,4.50508,0,0,1,807.55906,382.16024Z"
        transform="translate(-272.5 -243.16024)"
        fill="#f2f2f2"
      />
      <rect x="519.05906" y="90.5" width="20" height="4" fill="#ccc" />
      <rect x="519.05906" y="121.5" width="20" height="4" fill="#ccc" />
      <path
        d="M837.55906,382.16024h-12a4.50507,4.50507,0,0,1-4.5-4.5v-49a4.50508,4.50508,0,0,1,4.5-4.5h12a4.50508,4.50508,0,0,1,4.5,4.5v49A4.50508,4.50508,0,0,1,837.55906,382.16024Z"
        transform="translate(-272.5 -243.16024)"
        fill="#f2f2f2"
      />
      <rect x="549.05906" y="90.5" width="20" height="4" fill="#ccc" />
      <rect x="549.05906" y="121.5" width="20" height="4" fill="#ccc" />
      <path
        d="M698.55906,463.16024h-12a4.50507,4.50507,0,0,1-4.5-4.5v-49a4.50508,4.50508,0,0,1,4.5-4.5h12a4.50508,4.50508,0,0,1,4.5,4.5v49A4.50508,4.50508,0,0,1,698.55906,463.16024Z"
        transform="translate(-272.5 -243.16024)"
        fill="#f2f2f2"
      />
      <rect x="410.05906" y="171.5" width="20" height="4" fill="#ccc" />
      <rect x="410.05906" y="202.5" width="20" height="4" fill="#ccc" />
      <path
        d="M728.55906,463.16024h-12a4.50507,4.50507,0,0,1-4.5-4.5v-49a4.50508,4.50508,0,0,1,4.5-4.5h12a4.50508,4.50508,0,0,1,4.5,4.5v49A4.50508,4.50508,0,0,1,728.55906,463.16024Z"
        transform="translate(-272.5 -243.16024)"
        fill="#f2f2f2"
      />
      <rect x="440.05906" y="171.5" width="20" height="4" fill="#ccc" />
      <rect x="440.05906" y="202.5" width="20" height="4" fill="#ccc" />
      <path
        d="M758.55906,463.16024h-12a4.50507,4.50507,0,0,1-4.5-4.5v-49a4.50508,4.50508,0,0,1,4.5-4.5h12a4.50508,4.50508,0,0,1,4.5,4.5v49A4.50508,4.50508,0,0,1,758.55906,463.16024Z"
        transform="translate(-272.5 -243.16024)"
        fill="#f2f2f2"
      />
      <rect x="470.05906" y="171.5" width="20" height="4" fill="#ccc" />
      <rect x="470.05906" y="202.5" width="20" height="4" fill="#ccc" />
      <path
        d="M791.55906,301.16024h-12a4.50507,4.50507,0,0,1-4.5-4.5v-49a4.50508,4.50508,0,0,1,4.5-4.5h12a4.50508,4.50508,0,0,1,4.5,4.5v49A4.50508,4.50508,0,0,1,791.55906,301.16024Z"
        transform="translate(-272.5 -243.16024)"
        fill="#f2f2f2"
      />
      <rect x="503.05906" y="9.5" width="20" height="4" fill="#ccc" />
      <rect x="503.05906" y="40.5" width="20" height="4" fill="#ccc" />
      <path
        d="M821.55906,301.16024h-12a4.50507,4.50507,0,0,1-4.5-4.5v-49a4.50508,4.50508,0,0,1,4.5-4.5h12a4.50508,4.50508,0,0,1,4.5,4.5v49A4.50508,4.50508,0,0,1,821.55906,301.16024Z"
        transform="translate(-272.5 -243.16024)"
        fill="#f2f2f2"
      />
      <rect x="533.05906" y="9.5" width="20" height="4" fill="#ccc" />
      <rect x="533.05906" y="40.5" width="20" height="4" fill="#ccc" />
      <path
        d="M851.55906,301.16024h-12a4.50507,4.50507,0,0,1-4.5-4.5v-49a4.50508,4.50508,0,0,1,4.5-4.5h12a4.50508,4.50508,0,0,1,4.5,4.5v49A4.50508,4.50508,0,0,1,851.55906,301.16024Z"
        transform="translate(-272.5 -243.16024)"
        fill="#f2f2f2"
      />
      <rect x="563.05906" y="9.5" width="20" height="4" fill="#ccc" />
      <rect x="563.05906" y="40.5" width="20" height="4" fill="#ccc" />
      <path
        d="M881.55906,301.16024h-12a4.50507,4.50507,0,0,1-4.5-4.5v-49a4.50508,4.50508,0,0,1,4.5-4.5h12a4.50508,4.50508,0,0,1,4.5,4.5v49A4.50508,4.50508,0,0,1,881.55906,301.16024Z"
        transform="translate(-272.5 -243.16024)"
        fill="#f2f2f2"
      />
      <rect x="593.05906" y="9.5" width="20" height="4" fill="#ccc" />
      <rect x="593.05906" y="40.5" width="20" height="4" fill="#ccc" />
      <path
        d="M926.5,302.66024h-285a1,1,0,0,1,0-2h285a1,1,0,0,1,0,2Z"
        transform="translate(-272.5 -243.16024)"
        fill="#ccc"
      />
      <path
        d="M926.5,383.66024h-285a1,1,0,0,1,0-2h285a1,1,0,0,1,0,2Z"
        transform="translate(-272.5 -243.16024)"
        fill="#ccc"
      />
      <path
        d="M926.5,464.66024h-285a1,1,0,0,1,0-2h285a1,1,0,0,1,0,2Z"
        transform="translate(-272.5 -243.16024)"
        fill="#ccc"
      />
      <path
        d="M854.063,453.583a122.04116,122.04116,0,0,1,10.10051-38.51722q2.27961-5.09249,5.01812-9.96076a.7438.7438,0,0,0-1.28354-.75026,123.7286,123.7286,0,0,0-13.7678,37.98231q-1.03367,5.58355-1.55378,11.24593c-.08811.95214,1.39893.94613,1.48649,0Z"
        transform="translate(-272.5 -243.16024)"
        fill="#e6e6e6"
      />
      <circle cx="600.2819" cy="154.9144" r="9.4144" fill="#e6e6e6" />
      <path
        d="M855.026,453.83307a79.17357,79.17357,0,0,1,6.55267-24.98791q1.47888-3.30374,3.25549-6.462a.48254.48254,0,0,0-.83269-.48673,80.26825,80.26825,0,0,0-8.93182,24.6409q-.67059,3.6223-1.008,7.29575c-.05716.6177.90755.6138.96436,0Z"
        transform="translate(-272.5 -243.16024)"
        fill="#e6e6e6"
      />
      <circle cx="594.66984" cy="174.66195" r="6.10756" fill="#e6e6e6" />
      <path
        d="M853.80883,453.25653a79.17368,79.17368,0,0,1-10.2024-23.73277q-.86592-3.51453-1.40764-7.09749a.48253.48253,0,0,0-.95592.12838,80.26823,80.26823,0,0,0,8.11306,24.92247q1.69918,3.26856,3.69253,6.37254c.33485.5222,1.09311-.07422.76037-.59313Z"
        transform="translate(-272.5 -243.16024)"
        fill="#e6e6e6"
      />
      <circle cx="568.73518" cy="174.23322" r="6.10756" fill="#e6e6e6" />
      <path
        d="M835.05906,458.66024v-12a4.50508,4.50508,0,0,1,4.5-4.5h28a4.50508,4.50508,0,0,1,4.5,4.5v12a4.50508,4.50508,0,0,1-4.5,4.5h-28A4.50508,4.50508,0,0,1,835.05906,458.66024Z"
        transform="translate(-272.5 -243.16024)"
        fill="#f2f2f2"
      />
      <path
        d="M654.5,606.66024h-381a1,1,0,0,1,0-2h381a1,1,0,0,1,0,2Z"
        transform="translate(-272.5 -243.16024)"
        fill="#3f3d56"
      />
      <circle cx="199.05906" cy="205.5" r="27" fill="#2f2e41" />
      <polygon
        points="173.405 378.826 172.69 366.588 219.556 358.003 220.612 376.067 173.405 378.826"
        fill="#ffb8b8"
      />
      <path
        d="M436.62166,598.16324h23.64387a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H421.7348a0,0,0,0,1,0,0v0A14.88686,14.88686,0,0,1,436.62166,598.16324Z"
        transform="translate(747.34041 -113.14222) rotate(86.65462)"
        fill="#2f2e41"
      />
      <polygon
        points="193.789 378.714 186.004 388.185 145.768 362.666 157.257 348.688 193.789 378.714"
        fill="#ffb8b8"
      />
      <path
        d="M454.38952,629.78677h23.64386a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H439.50266a0,0,0,0,1,0,0v0A14.88686,14.88686,0,0,1,454.38952,629.78677Z"
        transform="translate(-597.31958 343.86136) rotate(-50.58212)"
        fill="#2f2e41"
      />
      <path
        d="M443.88663,577.83023l-5.31975,25.07884a4,4,0,0,0,3.84843,4.8295l52.29785.84351a4,4,0,0,0,4.00364-4.69462l-4.57453-25.92236a4,4,0,0,0-3.93914-3.30486H447.79957A4,4,0,0,0,443.88663,577.83023Z"
        transform="translate(-272.5 -243.16024)"
        fill="#2f2e41"
      />
      <path
        d="M452.55906,586.66024s-51-32-61-15c-5,8.5-2.5,16.75,1.25,22.875a34.63053,34.63053,0,0,0,14.4025,12.89112l41.3475,20.23388,15-16-10-9Z"
        transform="translate(-272.5 -243.16024)"
        fill="#2f2e41"
      />
      <path
        d="M478.55906,581.66024s66-19,53,17-62,22-62,22l-5-15,17-12Z"
        transform="translate(-272.5 -243.16024)"
        fill="#2f2e41"
      />
      <circle cx="199.39764" cy="211.66535" r="24.56103" fill="#ffb8b8" />
      <path
        d="M473.18454,585.629a131.99386,131.99386,0,0,1-30.25708-3.98633l-.29248-.08007-13.70556-63.04493a23.2247,23.2247,0,0,1,14.93286-26.94335,80.45969,80.45969,0,0,1,51.29956-1.02442h.00024a23.46956,23.46956,0,0,1,15.635,27.76465l-15.30835,63.19531-.21557.10254C488.91135,584.62606,480.956,585.629,473.18454,585.629Z"
        transform="translate(-272.5 -243.16024)"
        fill="#ccc"
      />
      <path
        d="M454.77438,590.52651a10.05573,10.05573,0,0,1,14.47536-5.31221l26.98651-23.42452,2.44163,18.40848-26.00117,19.4221a10.11027,10.11027,0,0,1-17.90233-9.09385Z"
        transform="translate(-272.5 -243.16024)"
        fill="#ffb8b8"
      />
      <path
        d="M480.51218,595.63583a4.53353,4.53353,0,0,1-1.29639-.19043,4.45263,4.45263,0,0,1-2.9624-2.81641l-3.25732-9.22851a4.472,4.472,0,0,1,1.30224-4.90235l36.7688-22.07422L496.573,491.76278l.36865-.08887c.14991-.0371,15.00025-3.417,21.0857,12.81055,4.26147,11.36524,20.03149,36.07715,18.91894,52.77637a14.88461,14.88461,0,0,1-12.322,13.72754l-41.38818,23.71289A4.456,4.456,0,0,1,480.51218,595.63583Z"
        transform="translate(-272.5 -243.16024)"
        fill="#ccc"
      />
      <path
        d="M484.63609,588.33293a10.05575,10.05575,0,0,0-14.47536-5.31221l-26.9865-23.42452-2.44163,18.40848,26.00117,19.4221a10.11027,10.11027,0,0,0,17.90232-9.09385Z"
        transform="translate(-272.5 -243.16024)"
        fill="#ffb8b8"
      />
      <path
        d="M461.60593,595.63583a4.456,4.456,0,0,1-2.72388-.93457l-44.38818-21.71289a14.88461,14.88461,0,0,1-12.322-13.72754c-1.11255-16.69922,17.65747-43.41113,21.91894-54.77637,6.085-16.22754,20.93555-12.84863,21.0857-12.81055l.36865.08887L428.051,558.42391l39.7688,20.07422a4.472,4.472,0,0,1,1.30224,4.90235l-3.25732,9.22851a4.45263,4.45263,0,0,1-2.9624,2.81641A4.5348,4.5348,0,0,1,461.60593,595.63583Z"
        transform="translate(-272.5 -243.16024)"
        fill="#ccc"
      />
      <path
        d="M514.55908,605.66016h-89a7.00818,7.00818,0,0,1-7-7v-49a7.00818,7.00818,0,0,1,7-7h89a7.00817,7.00817,0,0,1,7,7v49A7.00818,7.00818,0,0,1,514.55908,605.66016Z"
        transform="translate(-272.5 -243.16024)"
        fill="#6c63ff"
      />
      <circle cx="197.55906" cy="331" r="6" fill="#fff" />
      <path
        d="M447.09061,453.82593c-1.45566-3.6923.93266-8.09242,4.47568-9.881s7.81846-1.44843,11.60824-.26964c3.18484.99063,6.16976,2.52588,9.27688,3.73845a20.76152,20.76152,0,0,0,9.75287,1.73691c3.31428-.37431,6.61291-2.23278,7.96907-5.28,1.40574-3.15859.44963-7.01316-1.71516-9.7088a18.79922,18.79922,0,0,0-8.61171-5.5348c-7.3075-2.57443-15.74829-2.64969-22.53234,1.0925s-11.39446,11.7102-9.99219,19.33"
        transform="translate(-272.5 -243.16024)"
        fill="#2f2e41"
      />
      <path
        d="M305.16247,594.9787A122.0417,122.0417,0,0,1,315.263,556.46148q2.27961-5.09249,5.01813-9.96076a.7438.7438,0,0,0-1.28354-.75026,123.72825,123.72825,0,0,0-13.7678,37.98231q-1.03366,5.58356-1.55378,11.24593c-.08811.95214,1.39893.94613,1.48648,0Z"
        transform="translate(-272.5 -243.16024)"
        fill="#e6e6e6"
      />
      <circle cx="51.38142" cy="296.31007" r="9.4144" fill="#6c63ff" />
      <path
        d="M306.1255,595.22874a79.1741,79.1741,0,0,1,6.55267-24.98791q1.47889-3.30373,3.25549-6.462a.48254.48254,0,0,0-.83269-.48673,80.26852,80.26852,0,0,0-8.93181,24.64089q-.67059,3.62232-1.008,7.29576c-.05716.6177.90755.6138.96435,0Z"
        transform="translate(-272.5 -243.16024)"
        fill="#e6e6e6"
      />
      <circle cx="45.76935" cy="316.05762" r="6.10756" fill="#6c63ff" />
      <path
        d="M304.90835,594.6522a79.174,79.174,0,0,1-10.20241-23.73277q-.86592-3.51453-1.40763-7.09749a.48253.48253,0,0,0-.95592.12838,80.26809,80.26809,0,0,0,8.11306,24.92246q1.69919,3.26857,3.69252,6.37255c.33485.5222,1.09311-.07422.76038-.59313Z"
        transform="translate(-272.5 -243.16024)"
        fill="#e6e6e6"
      />
      <circle cx="19.8347" cy="315.62888" r="6.10756" fill="#6c63ff" />
      <path
        d="M286.15857,600.05591v-12a4.50508,4.50508,0,0,1,4.5-4.5h28a4.50508,4.50508,0,0,1,4.5,4.5v12a4.50508,4.50508,0,0,1-4.5,4.5h-28A4.50508,4.50508,0,0,1,286.15857,600.05591Z"
        transform="translate(-272.5 -243.16024)"
        fill="#f2f2f2"
      />
      <path
        d="M586.90885,614.06085c0,6.57707-5.33178,9.56657-11.90885,9.56657s-11.90885-2.9895-11.90885-9.56657S565.73756,599.80972,575,602.45614C584.26244,598.48652,586.90885,607.48377,586.90885,614.06085Z"
        transform="translate(-272.5 -243.16024)"
        fill="#ff6584"
      />
      <path
        d="M574.41992,605.53711a1.90366,1.90366,0,0,1-1.89111-1.65918c-.39429-3.28125-2.56763-9.708-3.48364-12.31836l-.00025-.001a1.703,1.703,0,0,1,.22022-1.5664,1.78652,1.78652,0,0,1,2.66333-.19239,1.70477,1.70477,0,0,1,.46826,1.27637c-.17944,3.35059,2.26294,8.76465,3.73486,11.69434a1.90795,1.90795,0,0,1-1.50976,2.75586A1.76339,1.76339,0,0,1,574.41992,605.53711Z"
        transform="translate(-272.5 -243.16024)"
        fill="#3f3d56"
      />
      <path
        d="M583.232,598.14572c4.13393-3.38342.89056-10.30763-4.28341-8.9784a4.17809,4.17809,0,0,0-1.8637.99416c-3.17381,2.99811-3.66567,10.66906-3.66567,10.66906S579.02377,601.58992,583.232,598.14572Z"
        transform="translate(-272.5 -243.16024)"
        fill="#3f3d56"
      />
    </svg>
  );
};

const ThinkingSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      width="100%"
      height="250"
      viewBox="0 0 1019.4842 436.68123"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        d="M314.02808,475.27364a9.75072,9.75072,0,1,0-19.40734,1.28194l-28.01439,36.68607a13.58254,13.58254,0,0,0,1.83575,14.91417l2.19759,2.56354,10.083-2.01667,11.42794-10.08331L290.806,507.19164l14.1167-22.18324-.01825-.01592A9.74283,9.74283,0,0,0,314.02808,475.27364Z"
        transform="translate(-90.2579 -231.65939)"
        fill="#ffb9b9"
      />
      <polygon
        points="30.041 422.968 25.468 405.984 88.8 380.265 95.549 405.331 30.041 422.968"
        fill="#ffb8b8"
      />
      <path
        d="M105.002,663.39128,90.2579,608.62916l.69264-.18651a22.07516,22.07516,0,0,1,27.054,15.57522l.00037.00135L127.01,657.46609Z"
        transform="translate(-90.2579 -231.65939)"
        fill="#2f2e41"
      />
      <polygon
        points="117.278 420.254 103.054 409.91 136.185 350.121 157.179 365.388 117.278 420.254"
        fill="#ffb8b8"
      />
      <path
        d="M201.1368,668.34061,155.27068,634.9853l.42187-.58015a22.07517,22.07517,0,0,1,30.8348-4.87041l.00114.00082L214.54188,649.908Z"
        transform="translate(-90.2579 -231.65939)"
        fill="#2f2e41"
      />
      <path
        d="M328.45025,568.36357l-35.795-34.77263a18.07626,18.07626,0,0,0-23.66833-1.3221L201.4006,607.3525l6.05018,9.41084L271.98356,573.069l43.69437,57.13867,41.67764-20.83841Z"
        transform="translate(-90.2579 -231.65939)"
        fill="#2f2e41"
      />
      <path
        d="M312.98939,575.75807l-26.21673-2.01667-18.986-4.60272a9.75256,9.75256,0,1,0-1.85,12.65572l-.00277.01364,11.42793,4.70553,49.07181,16.80551,6.05-4.70553Z"
        transform="translate(-90.2579 -231.65939)"
        fill="#ffb9b9"
      />
      <polygon
        points="285.92 416.699 271.131 426.11 253.653 426.11 172.315 395.86 53.332 417.371 49.971 391.826 158.871 344.099 254.326 375.693 285.92 416.699"
        fill="#2f2e41"
      />
      <circle cx="254.32577" cy="227.13245" r="26.21658" fill="#ffb9b9" />
      <path
        d="M412.41738,563.46316a150.631,150.631,0,0,1-7.3877,46.59159l-1.96286,6.03657-9.4111,43.0221-10.08328,2.68886-7.39442-9.41107-14.78884-10.7555L350.63366,624.158,341.41082,608.791l-2.87712-4.79967-10.08331-50.41649-38.31653-21.511-12.77217-2.01667,2.68889-7.39442,11.42774-15.46106L302.906,505.8472l3.36111-2.68888,2.68888,1.34443,14.82257,5.71013,48.05688-20.304,7.03142,1.14951L403.06674,511.225A150.49912,150.49912,0,0,1,412.41738,563.46316Z"
        transform="translate(-90.2579 -231.65939)"
        fill="#ccc"
      />
      <polygon
        points="314.825 325.949 289.281 342.754 251.153 377.131 248.276 372.332 240.209 331.999 242.226 331.999 263.065 293.683 314.825 325.949"
        opacity="0.1"
      />
      <polygon
        points="263.065 289.649 242.226 327.965 230.126 341.41 219.371 344.099 248.276 375.693 289.281 338.721 314.825 321.915 263.065 289.649"
        fill="#ccc"
      />
      <path
        d="M324.19252,439.29866l-2.8405,1.09286a3.96532,3.96532,0,0,1-1.06033-5.50666q.02295-.03393.04661-.06735l-5.24917-.24564a39.63744,39.63744,0,0,1,59.17341-4.76951c.239-.8231,2.84419.7783,3.90783,2.40209.35739-1.33937,2.8001,5.13521,3.66407,9.71188.4-1.52384,1.93791.9362.59056,3.2967.8537-.12472,1.23931,2.05947.57843,3.27633.934-.43878.77654,2.16855-.23609,3.911,1.3327-.11841-.1137,27.33122-20.1137,25.33122-1.39236-6.39749-1-6-2.63957-14.22639-.76312-.81-1.59882-1.54779-2.43315-2.28425l-4.51259-3.9833c-5.2473-4.63182-10.02063-10.34844-17.01093-12.07955-4.80393-1.18968-7.84143-1.45827-5.22344-6.87151-2.36532.98706-4.57411,2.45493-6.96063,3.37169C323.90539,440.90187,324.23894,440.05545,324.19252,439.29866Z"
        transform="translate(-90.2579 -231.65939)"
        fill="#2f2e41"
      />
      <circle cx="267.43406" cy="230.15744" r="4.70554" fill="#ffb9b9" />
      <rect
        x="137.51364"
        y="351.37595"
        width="21.61009"
        height="21.61009"
        transform="translate(-313.1754 254.44578) rotate(-86.18992)"
        fill="#e6e6e6"
      />
      <path
        d="M124.34354,362.13134l26.18282,1.74368-1.74369,26.18282-26.18282-1.74368Zm24.96862,2.80626-23.90605-1.59206-1.59206,23.906,23.90605,1.59206Z"
        transform="translate(-90.2579 -231.65939)"
        fill="#ccc"
      />
      <rect
        x="241.00867"
        y="288.77184"
        width="21.61009"
        height="21.61009"
        transform="translate(-147.57238 -172.07462) rotate(-12.12675)"
        fill="#e6e6e6"
      />
      <path
        d="M245.27842,276.50957l5.51255,25.65526-25.65526,5.51254-5.51254-25.65526Zm4.15743,24.7795-5.0332-23.42436-23.42437,5.03319,5.03319,23.42438Z"
        transform="translate(-90.2579 -231.65939)"
        fill="#ccc"
      />
      <rect
        x="226.60299"
        y="392.67408"
        width="21.61008"
        height="21.61009"
        transform="translate(-301.94557 39.64172) rotate(-43.12712)"
        fill="#e6e6e6"
      />
      <path
        d="M253.81456,385.99664,234.663,403.93538l-17.93873-19.15156,19.15156-17.93872Zm-19.09885,16.3261,17.48621-16.37883-16.37884-17.48618-17.48621,16.37884Z"
        transform="translate(-90.2579 -231.65939)"
        fill="#ccc"
      />
      <path
        d="M1053.535,231.65939H414.15223a17.59849,17.59849,0,0,0-17.59851,17.59849v356.2522a17.59854,17.59854,0,0,0,17.59851,17.59857H1053.535a17.59856,17.59856,0,0,0,17.59851-17.59857V249.25788a17.59852,17.59852,0,0,0-17.59851-17.59849Z"
        transform="translate(-90.2579 -231.65939)"
        fill="#3f3d56"
      />
      <rect
        x="329.89003"
        y="31.10145"
        width="627.39127"
        height="353.91303"
        fill="#fff"
      />
      <circle cx="643.04942" cy="15.01449" r="6.43477" fill="#fff" />
      <polygon
        points="777.858 385.015 329.89 385.015 329.89 31.102 777.858 385.015"
        fill="#f2f2f2"
      />
      <circle cx="428.05798" cy="298.22423" r="60.3068" fill="#6c63ff" />
      <path
        d="M531.74082,575.21a75.01577,75.01577,0,1,1,75.01581-75.01575A75.01578,75.01578,0,0,1,531.74082,575.21Zm0-149.051A74.03519,74.03519,0,1,0,605.776,500.19428a74.03518,74.03518,0,0,0-74.03522-74.03521Z"
        transform="translate(-90.2579 -231.65939)"
        fill="#3f3d56"
      />
      <rect
        x="753.43694"
        y="214.96957"
        width="58.60522"
        height="12.24586"
        fill="#3f3d56"
      />
      <rect
        x="697.99083"
        y="148.62679"
        width="169.49743"
        height="5.24823"
        fill="#3f3d56"
      />
      <rect
        x="697.99083"
        y="169.24617"
        width="169.49743"
        height="5.24823"
        fill="#3f3d56"
      />
      <rect
        x="697.99083"
        y="189.86555"
        width="169.49743"
        height="5.24823"
        fill="#3f3d56"
      />
      <rect
        x="888.40147"
        y="52.28163"
        width="24.49176"
        height="24.49173"
        fill="#6c63ff"
      />
      <path
        d="M1014.52225,319.8039h-29.74v-29.74h29.74Zm-28.4469-1.293h27.15381V291.357H986.07529Z"
        transform="translate(-90.2579 -231.65939)"
        fill="#ccc"
      />
      <path
        d="M1088.74918,610.23908h-61.22937v-4.41156a.87466.87466,0,0,0-.87463-.87469h-20.993a.87468.87468,0,0,0-.87476.87463v4.41162H991.657v-4.41156a.87468.87468,0,0,0-.8747-.87469H969.7894a.87467.87467,0,0,0-.87469.87469h0v4.41156H955.79416v-4.41156a.87467.87467,0,0,0-.87469-.87469h-20.993a.87468.87468,0,0,0-.8747.87469h0v4.41156H919.93125v-4.41156a.87468.87468,0,0,0-.8747-.87469H898.06363a.87466.87466,0,0,0-.87469.87463v4.41162H884.0684v-4.41156a.87468.87468,0,0,0-.8747-.87469H862.20078a.87467.87467,0,0,0-.87469.87469h0v4.41156H848.20548v-4.41156a.87467.87467,0,0,0-.87469-.87469H826.33787a.87468.87468,0,0,0-.8747.87469h0v4.41156H812.34263v-4.41156a.87468.87468,0,0,0-.8747-.87469H647.02347a.87467.87467,0,0,0-.87469.87469h0v4.41156H633.02817v-4.41156a.87467.87467,0,0,0-.87469-.87469H611.16062a.87468.87468,0,0,0-.8747.87469h0v4.41156h-13.1206v-4.41156a.87466.87466,0,0,0-.87463-.87469h-20.993a.87467.87467,0,0,0-.87469.87469h0v4.41156H561.3024v-4.41156a.87467.87467,0,0,0-.87469-.87469H539.43479a.87468.87468,0,0,0-.8747.87469h0v4.41156H525.43955v-4.41156a.87467.87467,0,0,0-.87469-.87469H503.57194a.87468.87468,0,0,0-.8747.87469h0v4.41156h-13.1206v-4.41156a.87468.87468,0,0,0-.8747-.87469H467.709a.87468.87468,0,0,0-.87469.87463v4.41162H453.71375v-4.41156a.87467.87467,0,0,0-.87466-.87469H431.84617a.8747.8747,0,0,0-.8747.87469h0v4.41156H390.735A20.99292,20.99292,0,0,0,369.74213,631.232v9.4925A20.99291,20.99291,0,0,0,390.735,661.71736h698.01416a20.99293,20.99293,0,0,0,20.99292-20.99286V631.232A20.9929,20.9929,0,0,0,1088.74918,610.23908Z"
        transform="translate(-90.2579 -231.65939)"
        fill="#3f3d56"
      />
    </svg>
  );
};
