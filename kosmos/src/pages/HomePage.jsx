import React, { useEffect } from "react";
import '../styles/HomePage.css'
import earthImage from '../assets/earth.png'
import saturnImage from '../assets/saturn.png'
import astronautImage from '../assets/astronaut.png'
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="parent-div ">
      <div className="div-14 pos-abs">
        {/* welcome1 */}
        <section className="welcome-15 pos-abs">
          <div className="welcome-16 pos-abs"></div>

          <div className="rectangle-3-17 pos-abs"></div>

          <div className="header-19 pos-abs">
            <div className="rectangle-1-110 pos-abs"></div>

            <div className="rectangle-2-111 pos-abs"></div>

            <div className="div-112 pos-abs">
              <span className="div-112-0"><Link to={"/"} className="nav1">{`Главная`}</Link></span>
            </div>

            <div className="div-113 pos-abs">
              <span className="div-113-0"><Link to={"/space"} className="nav1">{`Космос и РК`}</Link></span>
            </div>

            <div className="div-116 pos-abs">
              <span className="div-116-0"><Link to={"/worldexperience"} className="nav1">{`Мировой опыт`}</Link></span>
            </div>

            <div className="div-114 pos-abs">
              <span className="div-114-0"><Link to={"/tourism"} className="nav1">{`Космотуризм`}</Link></span>
            </div>

            <div className="div-115 pos-abs">
              <span className="div-115-0"><Link to={"/conclusion"} className="nav1">{`Заключение`}</Link></span>
            </div>
          </div>

          <div className="group-6-134 pos-abs">
            <div className="vector-16-136 pos-abs">
              <div className="nodeBg-136 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>

            <div className="vector-15-135 pos-abs">
              <div className="nodeBg-135 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
          </div>

          <div className="welcomeimage-18 pos-abs">
            <img
              src={saturnImage}
              className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-18"
              alt="18-ALT"
            />{" "}
          </div>

          <div className="rectangle-5-138 pos-abs"></div>

          <div className="div-137 pos-abs">
            <span className="div-137-0">{`«Человечество не останется вечно на земле, но в погоне за светом и пространством сначала робко проникнет за пределы атмосферы, а затем завоюет себе всё околосолнечное пространство».
                                               К. Циолковский`}</span>
          </div>

          <div className="group-4-128 pos-abs">
            <div className="vector-6-130 pos-abs">
              <div className="nodeBg-130 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>

            <div className="vector-5-129 pos-abs">
              <div className="nodeBg-129 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
          </div>

          <div className="welcometext-119 pos-abs">
            <div className="div-120 pos-abs">
              <span className="div-120-0">{`Космический `}</span>
            </div>

            <div className="div-121 pos-abs">
              <span className="div-121-0">{`туризм`}</span>
            </div>
          </div>

          <div className="group-8-125 pos-abs">
            <div className="vector-10-127 pos-abs">
              <div className="nodeBg-127 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>

            <div className="vector-9-126 pos-abs">
              <div className="nodeBg-126 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
          </div>

          <div className="rectangle-6-117 pos-abs"></div>

          <div className="rectangle-7-118 pos-abs"></div>

          <div className="group-1-122 pos-abs">
            <div className="vector-2-124 pos-abs">
              <div className="nodeBg-124 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>

            <div className="vector-1-123 pos-abs">
              <div className="nodeBg-123 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
          </div>

          <div className="group-3-131 pos-abs">
            <div className="vector-8-133 pos-abs">
              <div className="nodeBg-133 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>

            <div className="vector-7-132 pos-abs">
              <div className="nodeBg-132 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
          </div>
        </section>
        {/* intro1 */}
        <section className="intro-139 pos-abs">
          <div className="rectangle-10-140 pos-abs"></div>

          <div className="div-154 pos-abs">
            <span className="div-154-0">{`Введение в проект.`}</span>
          </div>

          <div className="star-6-152 pos-abs">
            <div className="nodeBg-152 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
          </div>

          <div className="star-8-148 pos-abs">
            <div className="nodeBg-148 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
          </div>

          <div className="star-10-147 pos-abs">
            <div className="nodeBg-147 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
          </div>

          <div className="div-155 pos-abs">
            <span className="div-155-0">{`Еще несколько лет тому назад нельзя было и представить, что такое возможно, всё воспринималось, как фантазии и мечты человека, как что-то далекое, что в космосе будут жить и работать тысячи людей. Там будут астрономические обсерватории для изучения Вселенной, исследовательские институты и экспериментальные мастерские. Орбитальные станции там густо заполнят околоземное пространство. Соединяясь между собой, они создадут целые, плавающие в небе острова. Станции будут принимать тысячи туристов, желающих взглянуть на Землю со стороны.`}</span>
          </div>

          <div className="star-1-141 pos-abs">
            <div className="nodeBg-141 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
          </div>

          <div className="star-2-143 pos-abs">
            <div className="nodeBg-143 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
          </div>

          <div className="rectangle-9-153 pos-abs"></div>

          <div className="star-11-151 pos-abs">
            <div className="nodeBg-151 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
          </div>

          <div className="star-5-149 pos-abs">
            <div className="nodeBg-149 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
          </div>

          <div className="div-156 pos-abs">
            <span className="div-156-0">{`В настоящее время космический туризм является перспективным видом путешествий в мире. У туристов возникают потребности в получении новых ощущений, именно космический туризм сможет в большей мере удовлетворить их. Под космическим туризмом понимается `}</span>
            <span className="div-156-1">{`туризм, предполагающий путешествия частных лиц в космическое пространство или на околоземную орбиту с целью отдыха, развлечения или получения уникального опыта. Этот вид туризма стал возможным благодаря развитию космических технологий и сотрудничеству между государственными космическими агентствами и частными компаниями. Космический туризм включает в себя как суборбитальные полеты, так и длительные пребывания на Международной космической станции (МКС)`}</span>
            <span className="div-156-2">{`.`}</span>
          </div>

          <div className="star-3-146 pos-abs">
            <div className="nodeBg-146 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
          </div>

          <div className="star-4-142 pos-abs">
            <div className="nodeBg-142 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
          </div>

          <div className="star-12-144 pos-abs">
            <div className="nodeBg-144 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
          </div>

          <div className="star-7-145 pos-abs">
            <div className="nodeBg-145 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
          </div>

          <div className="star-9-150 pos-abs">
            <div className="nodeBg-150 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
          </div>
        </section>

        <div className="line-19-193 pos-abs"></div>
        {/* target1 */}
        <section className="target-157 pos-abs">
          <div className="div-167 pos-abs">
            <span className="div-167-0">{`Цели и актуальность исследования.`}</span>
          </div>

          <div className="image-1-158 pos-abs">
            <img
              src={earthImage}
              className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-158 planet"
              alt="158-ALT"
            />{" "}
          </div>

          <div className="div-159 pos-abs">
            <span className="div-159-0">{`Цель`}</span>
            <span className="div-159-1">{` данного научно-исследовательского проекта`}</span>
            <span className="div-159-2">{` — исследовать возможности применения космических технологий и техник в сфере туризма в Казахстане, анализируя потенциал для внедрения инновационных решений, которые могут стать основой для роста космического туризма в стране.`}</span>
          </div>

          <div className="div-160 pos-abs">
            <span className="div-160-0">{`Актуальность`}</span>
            <span className="div-160-1">{` исследования`}</span>
            <span className="div-160-2">{` подтверждается рядом факторов, которые тесно связаны с динамично развивающимися областями науки, технологий и общества.`}</span>
          </div>

          <div className="div-161 pos-abs">
            <span className="div-161-0">{`Технологический прогресс – С развитием новых технологий, таких как искусственный интеллект, робототехника и космические исследования, открываются новые возможности для решения задач, которые раньше казались невозможными.`}</span>
          </div>

          <div className="div-165 pos-abs">
            <span className="div-165-0">{`Экономический потенциал – Космический туризм открывает новые рынки и возможности для инвестиций, способствует росту экономики. Развитие коммерческих запусков, а также добыча полезных ископаемых на других планетах могут стать важными источниками дохода и способствовать экономическому росту.`}</span>
          </div>

          <div className="div-166 pos-abs">
            <span className="div-166-0">{`Научный интерес – Исследование других планет, звезд, а также поиск жизни за пределами Земли способствует не только расширению знаний, но и позволяет решить фундаментальные вопросы о происхождении Вселенной и месте человека в ней, а также понять, как человечество сможет адаптироваться к жизни и работе в условиях невесомости.`}</span>
          </div>

          <div className="div-162 pos-abs">
            <span className="div-162-0">{`Популяризация космоса – космический туризм способствует повышению интереса к космическим исследованиям и науке в целом, а также усиливает международное сотрудничество.`}</span>
          </div>

          <div className="div-164 pos-abs">
            <span className="div-164-0">{`Экологические и этические вопросы – Космическая индустрия сталкивается с вопросами, связанными с загрязнением космоса (например, орбитальный мусор) и возможным воздействием на Землю.`}</span>
          </div>

          <div className="div-163 pos-abs">
            <span className="div-163-0">{`Эти факторы подчеркивают важность и актуальность исследования, поскольку они формируют не только возможности для научного и технологического прогресса, но и влияют на развитие общества и устойчивое будущее страны.`}</span>
          </div>
        </section>

        <div className="line-18-192 pos-abs"></div>
        {/* task1 */}
        <section className="task-168 pos-abs">
          <div className="rectangle-11-169 pos-abs"></div>

          <div className="div-171 pos-abs">
            <span className="div-171-0">{`Основные задачи исследования проекта`}</span>
          </div>

          <div className="rectangle-12-170 pos-abs"></div>

          <div className="div-172 pos-abs">
            <span className="div-172-0">{`Исследование текущего состояния космических технологий в Казахстане, анализ деятельности ключевых игроков на рынке мирового космического туризма, оценка перспектив развития отрасли и её влияния на экономику страны, а также разработка рекомендаций по внедрению инновационных решений.     `}</span>
          </div>

          <div className="image-2-173 pos-abs">
            <img
              src={astronautImage}
              className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-173 "
              alt="173-ALT"
            />{" "}
          </div>
        </section>

        <div className="line-20-194 pos-abs"></div>

        <div className="div-174 pos-abs">
          <span className="div-174-0">{`Подробнее можете ознакомиться в нашей статье`}</span>
        </div>

        <div className="vector-17-175 pos-abs">
          <div className="nodeBg-175 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
        </div>

        <div className="vector-18-176 pos-abs">
          <div className="nodeBg-176 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
        </div>

        <div className="rectangle-26-177 pos-abs"></div>

        <div className="div-178 pos-abs">
          <a href="/Космотуризм РК.docx" download className="div-178-0 download-link">{`Скачать`}</a>
        </div>
        {/* footer1 */}
        <section className="footer-179 pos-abs">
          <div className="rectangle-27-180 pos-abs"></div>

          <div className="c-134-181 pos-abs">
            <span className="c-134-181-0">{`КГУ "Лицей № 134`}</span>
          </div>

          <div className="c-10a-188 pos-abs">
            <span className="c-10a-188-0">{`10A`}</span>
          </div>

          <div className="div-190 pos-abs">
            <span className="div-190-0">{`Навигация`}</span>
          </div>

          <div className="line-17-189 pos-abs"></div>

          <div className="line-18-191 pos-abs"></div>

          <div className="div-182 pos-abs">
            <span className="div-182-0">{`Большакова Анастасия, Шевченко Максим,
Джандалиев Даулет, Манакбаев Диас, Уразалиев Аян`}</span>
          </div>

          <div className="div-183 pos-abs">
            <span className="div-183-0"><Link to={"/"} className="nav1">{`Главная`}</Link></span>
          </div>

          <div className="div-184 pos-abs">
            <span className="div-184-0"><Link to={"/space"} className="nav1">{`Космос и РК`}</Link></span>
          </div>

          <div className="div-185 pos-abs">
            <span className="div-185-0"><Link to={"/worldexperience"} className="nav1">{`Мировой опыт`}</Link></span>
          </div>

          <div className="div-186 pos-abs">
            <span className="div-186-0"><Link to={"/tourism"} className="nav1">{`Космотуризм`}</Link></span>
          </div>

          <div className="div-187 pos-abs">
            <span className="div-187-0"><Link to={"/conclusion"} className="nav1">{`Заключение`}</Link></span>
          </div>
        </section>
      </div>
    </div>
  );
};
export default HomePage;
