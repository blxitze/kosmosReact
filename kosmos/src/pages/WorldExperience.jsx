import React, { useEffect } from "react";
import '../styles/WorldExperience.css'
import { Link } from "react-router-dom";
import RocketModel from "../components/RocketModel";

const WorldExperience = () => {
  return (
    <div className="parent-div ">
      <div className="div-6185 pos-abs">
        {/* first p1 */}
        <section className="first-p-6186 pos-abs">
          <div className="rect-6187 pos-abs"></div>

          <div className="header-6188 pos-abs">
            <div className="rectangle-1-6189 pos-abs"></div>

            <div className="rectangle-2-6190 pos-abs"></div>

            <div className="div-6191 pos-abs">
              <span className="div-6191-0"><Link to={"/"} className="nav1">{`Главная`}</Link></span>
            </div>

            <div className="div-6192 pos-abs">
              <span className="div-6192-0"><Link to={"/space"} className="nav1">{`Космос и РК`}</Link></span>
            </div>

            <div className="div-6195 pos-abs">
              <span className="div-6195-0"><Link to={"/worldexperience"} className="nav1">{`Мировой опыт`}</Link></span>
            </div>

            <div className="div-6193 pos-abs">
              <span className="div-6193-0"><Link to={"/tourism"} className="nav1">{`Космотуризм`}</Link></span>
            </div>

            <div className="div-6194 pos-abs">
              <span className="div-6194-0"><Link to={"/conclusion"} className="nav1">{`Заключение`}</Link></span>
            </div>
          </div>

          <div className="div-61108 pos-abs">
            <span className="div-61108-0">{`Мировой опыт использования космических технологий в туризме.`}</span>
          </div>

          <div className="rectangle-43-6196 pos-abs"></div>

          <div className="rectangle-48-6199 pos-abs"></div>

          <div className="rectangle-16-61104 pos-abs"></div>

          <div className="image-61105 pos-abs">
            <img
              src="https://s3-alpha-sig.figma.com/img/7ae6/41ac/92c7a755edef5edabf21fad1e2a2fd05?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=arqwj4jHizbl94EI0lcvfjJ3FUrYC82bMqwffptlhSIHLDG-b9fBhBSgRCWbURUU5pZd1img46EXy6dE4J4Vco22z9W3dqAzfzhkaNkrziKfzVehRwrLfVy8Ob3Knj9Q7xqx6t6vwzqqKWv3BogrsGei5cfhBZXChcBhw6ZNUYIo1lldKmnEa62ATEYbSmaSMX5s-QmzBb-j2fEfrWt9LS-DcwKwz9scbwpq1EUPW8gk741fchTHmYUZkE7m4VJJhPNIAfa60kEZ1wor2h-zKJ5wr411vbF6OaQJljcvrYilaFMJB40jHnRkOaFe247niITvUXnkrMFFL2f9ZljFVQ__"
              className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-61105 "
              alt="61105-ALT"
            />{" "}
          </div>

          <div className="div-61109 pos-abs">
            <span className="div-61109-0">{`Мировой опыт использования космических технологий в туризме развивался с момента появления первых коммерческих полетов в космос.`}</span>
          </div>

          <div className="rectangle-44-6197 pos-abs"></div>

          <div className="rectangle-45-61101 pos-abs"></div>

          <div className="rectangle-15-61102 pos-abs"></div>

          <div className="image-61106 pos-abs">
            <img
              src="https://s3-alpha-sig.figma.com/img/9755/0358/3b44659e2bd760489b1692454e7d89b1?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gSYxDd4B-X8wAa4H35dz7Z4bQ4BDhrVfSJhXiN0h2AOWe7LQOtG2L1bLyxrbowF~wq~5kFFrgSJt14SMRt7Oq2gRIH-YniXS0KSdSqMTPzCurCs1ShZqt0xlnh3Hy5ON8G8mncUR~89TjvUIkrcvkAEkg9EKQsHLkZ1lH0n7MAOy0zQYyCLlR9rbH8VvpsfcJALd1pU175-Pkxv53cSiYMicljVxejXof-0T4IwuaC-MVPGw5qQQ5kF6kCUf6bko~-i0SKPol4~qFz8Oy-PAdlUWC~u9ouCUo5Gl6SPfQSy8CJ68FrgRf1JP042VWXsw7cMu1oUkizOR8iypaoLjmQ__"
              className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-61106 "
              alt="61106-ALT"
            />{" "}
          </div>

          <div className="div-61111 pos-abs">
            <span className="div-61111-0">{`Зарождение космического туризма связано с развитием космических технологий и постепенным переходом от государственных космических программ к участию частных компаний.`}</span>
          </div>

          <div className="rectangle-46-61100 pos-abs"></div>

          <div className="rectangle-17-61103 pos-abs"></div>

          <div className="image-4-61107 pos-abs">
            <img
              src="https://s3-alpha-sig.figma.com/img/04ed/ab86/af5e41abd7ec49361fdcf470476891e3?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CYkPILisbeI2Yug8JacJLecHPhcypnMX25lBQ0gNFk272fz1R0mW9t0dujedwbAa0zO6d8CPjM1pbkq0bedbk2cQINiqaHSUmoEGjyuG0uLGfk25r~v-r7VHcTPfxyNpSCWUe3J37dE1qgjOpbYfxpY6j~9OpU66bjVFslhMYjvJvEm0sjCg1w6laPXuf-EJ3ACK4YxczqbgN5s3rw969Tqx-ARRpWbwjMN~j4Tep39b6K~F0LsXn53t0UTv-uqT6w4EWbiEdGT0-CjeGDI915T7ygcm1ucOUUfoibHbhXzYbrhnxm2rmuY6eBDxiJXuTIiPkdLyXEZKYuUIjuDm9g__"
              className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-61107 "
              alt="61107-ALT"
            />{" "}
          </div>

          <div className="xx-------xxi-61110 pos-abs">
            <span className="xx-------xxi-61110-0">{`Этот процесс начался во второй половине XX века и продолжает активно развиваться в XXI веке.`}</span>
          </div>

          <div className="rectangle-47-6198 pos-abs"></div>

          <div className="div-61112 pos-abs">
            <span className="div-61112-0">{`Рассмотрим основные этапы и ключевые события, которые способствовали появлению и становлению космического туризма.`}</span>
          </div>
        </section>
        {/* second p1 */}
        <section className="second-p-61113 pos-abs">
          <div className="soyuz-7kok-acti-61114 pos-abs">
            <img
              src="https://s3-alpha-sig.figma.com/img/41e0/15d0/06a1f485fc62acf90199737213967944?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SvFkvpsQoI646mHsWGy6epMYezCPJka5aYdO23BdeFnKDByU7-XVtuIrp7eYI5tHhwOfW505Uudsz-zVYvVIG2mf-4v~Fc~PribSPO42tX9OyMp3QbMqUg3zHQ6xMsOaLK0jek7wTYqTgpHrjttorcvdx0RxqHbfaZvU4uJv0ukX1rVOjCKQH1JNZiSMH8hFUvLVVpdFmJsU92X5JDX~DeHg1hkwo02r6KayHPDU5eLDLrRVFJpsRI6tvxvhvGBZSdXDikSdN8a0HTkaRzmbPjp-1LeOCPN1IBkiAXmj1f~BM~Vz977-Y-KHp5Eso1OZFTqOGTmGSfyLRXqTUuu4CA__"
              className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-61114 "
              alt="61114-ALT"
            />{" "}
          </div>

          <div className="rectangle-20-61116 pos-abs"></div>

          <div className="c-1957------------61118 pos-abs">
            <span className="c-1957------------61118-0">{`Космическая эра`}</span>
            <span className="c-1957------------61118-1">{` для человечества началась еще в 1957 году. Тогда на орбиту планеты вывели первый искусственный спутник. В 1961 году советским космонавтом Юрием Гагариным был осуществлен первый космический полёт на космическом корабле «Восток-1» и удачное возвращение на Землю. Это событие положило начало космической эре, но в это время космические полеты были исключительно государственными проектами. Однако интерес к космосу среди широкой общественности и стремление к коммерциализации космоса начали расти в 1980-90-е годы. Тогда же появились первые мысли о том, что космические путешествия могут быть доступны не только профессиональным астронавтам, но и обычным людям.`}</span>
          </div>

          <div className="rectangle-18-61115 pos-abs"></div>

          <div className="rectangle-19-61117 pos-abs"></div>

          <div className="c-1990-61119 pos-abs">
            <span className="c-1990-61119-0">{`Первые шаги`}</span>
            <span className="c-1990-61119-1">{` к космическому туризму были сделаны частными компаниями в 1990-е годы, когда они начали искать возможности для коммерческих полетов в космос. Они предоставляли услуги для состоятельных клиентов, готовых заплатить за полет в космос. В рамках этого бизнеса стали возможными поездки в космос для частных лиц, но эти полеты были осуществлены на борту российских космических кораблей Союз.`}</span>
          </div>

          <div className="c-2001------------61120 pos-abs">
            <span className="c-2001------------61120-0">{`Россия`}</span>
            <span className="c-2001------------61120-1">{` стала одной из первых стран, открывших возможность космического туризма. В 2001 году американский предприниматель Деннис Тито стал первым в истории космическим туристом, отправившимся на Международную космическую станцию (МКС) на борту российского корабля «Союз». В дальнейшем Роскосмос продолжил сотрудничество с частными лицами и компаниями, отправляя туристов на МКС. Среди космических путешественников, полетевших благодаря российской программе, были Марк Шаттлворт, Чарльз Симони, Ги Лалиберте и другие. В 2021 году актриса Юлия Пересильд и режиссер Клим Шипенко совершили полет на МКС для съемок художественного фильма «Вызов».`}</span>
          </div>
        </section>
        {/* third p1 */}
        <section className="third-p-61131 pos-abs">
          <div className="rectangle-33-61132 pos-abs"></div>

          <div className="rectangle-25-61151 pos-abs"></div>

          <div className="line-16-61153 pos-abs"></div>

          <div className="line-15-61152 pos-abs"></div>

          <div className="rectangle-23-61142 pos-abs"></div>

          <div className="line-11-61143 pos-abs"></div>

          <div className="line-12-61144 pos-abs"></div>

          <div className="image-5-61134 pos-abs">
            <RocketModel />
          </div>

          <div className="rectangle-29-61133 pos-abs"></div>

          <div className="rectangle-22-61148 pos-abs"></div>

          <div className="line-9-61149 pos-abs"></div>

          <div className="line-10-61150 pos-abs"></div>

          <div className="rectangle-30-61136 pos-abs"></div>

          <div className="rectangle-31-61137 pos-abs"></div>

          <div className="div-61138 pos-abs">
            <span className="div-61138-0">{`Сегодня`}</span>
            <span className="div-61138-1">{`  Россия разрабатывает перспективные проекты, включая суборбитальные полеты и участие в международных космических туристических программах. Компания «КосмоКурс» разрабатывала проекты суборбитального туризма, а Роскосмос продолжает модернизацию кораблей «Союз» для будущих туристических миссий.`}</span>
          </div>

          <div className="spacex-----2021-61139 pos-abs">
            <span className="spacex-----2021-61139-0">{`Также широкое развитие космического туризма активно продвигается частными компаниями США. Основным игроком на рынке стала компания SpaceX, принадлежащая Илону Маску. В 2021 году она осуществила миссию Inspiration4, в рамках которой четыре частных лица провели несколько дней на орбите. Компания также развивает программу туристических полетов к Луне и даже Марсу в будущем.`}</span>
          </div>

          <div className="rectangle-24-61145 pos-abs"></div>

          <div className="line-13-61146 pos-abs"></div>

          <div className="line-14-61147 pos-abs"></div>

          <div className="rectangle-21-61135 pos-abs"></div>

          <div className="line-7-61140 pos-abs"></div>

          <div className="line-8-61141 pos-abs"></div>
        </section>
        {/* last p1 */}
        <section className="last-p-61121 pos-abs">
          <div className="rectangle-32-61122 pos-abs"></div>

          <div className="blue-origin-----61124 pos-abs">
            <span className="blue-origin-----61124-0">{`Еще один важный игрок`}</span>
            <span className="blue-origin-----61124-1">{` – Blue Origin, основанная Джеффом Безосом. Она занимается суборбитальными полетами на корабле New Shepard. В 2021 году сам Джефф Безос и еще несколько туристов совершили полет в космос.`}</span>
          </div>

          <div className="image-6-61123 pos-abs">
            <img
              src="https://s3-alpha-sig.figma.com/img/d7c4/e72d/52e96f5357ebf56e9526bee94aed904b?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rbukYjMbdElkfplRK~XE6zBcfhfUHWPH40Tn8oY4YTeb0JCsRmVDBdQ6WQQ6pmU5cdxUwfeXdxGRvq~Jbe~NSjsv2QCSSn0eOnvPGFCNHmG0Lji6Sr10XzA-kbd1q4pPfksoNS8xAMkHZV7~Rjiz9cmeNaU65H0z~OQAQnW38e9Kofm-Saq9vujqNWhRUPHZHcdKV7FP2G4SggcaqDQ5ZDx4uTxZ20myrYvqa87b9NA7IN3jjTpXVdyODlCs7PqdrahMKe6RZqsAVx8I~Ri58LuB3oOAcjWtZvvxOkXco8XNNF7RmFmKrfQr8eq4Pg5P16t13eabVx9gAJZHV2L-qQ__"
              className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-61123 "
              alt="61123-ALT"
            />{" "}
          </div>

          <div className="virgin-galactic-61125 pos-abs">
            <span className="virgin-galactic-61125-0">{`Virgin Galactic`}</span>
            <span className="virgin-galactic-61125-1">{`, принадлежащая Ричарду Брэнсону, также предлагает суборбитальные туристические полеты. В 2021 году сам Брэнсон протестировал космический корабль VSS Unity, совершив полет на границу космоса. Компания продолжает продавать билеты и планирует регулярные коммерческие запуски.`}</span>
          </div>

          <div className="div-61126 pos-abs">
            <span className="div-61126-0">{`Подробнее ознакомится с информацией об использовании космических технологий можете в нашем файле`}</span>
          </div>

          <div className="vector-19-61129 pos-abs">
            <div className="nodeBg-61129 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
          </div>

          <div className="rectangle-27-61127 pos-abs"></div>

          <div className="div-61128 pos-abs">
            <a href="/Космотуризм РК.docx" download className="div-61128-0 download-link">{`Скачать`}</a>
          </div>

          <div className="vector-20-61130 pos-abs">
            <div className="nodeBg-61130 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
          </div>
        </section>
        {/* footer1 */}
        <section className="footer-61154 pos-abs">
          <div className="rectangle-27-61155 pos-abs"></div>

          <div className="c-134-61156 pos-abs">
            <span className="c-134-61156-0">{`КГУ "Лицей № 134`}</span>
          </div>

          <div className="c-10a-61163 pos-abs">
            <span className="c-10a-61163-0">{`10A`}</span>
          </div>

          <div className="div-61165 pos-abs">
            <span className="div-61165-0">{`Навигация`}</span>
          </div>

          <div className="line-17-61164 pos-abs"></div>

          <div className="line-18-61166 pos-abs"></div>

          <div className="div-61157 pos-abs">
            <span className="div-61157-0">{`Большакова Анастасия, Шевченко Максим,
Джандалиев Даулет, Манакбаев Диас, Уразалиев Аян`}</span>
          </div>

          <div className="div-61158 pos-abs">
            <span className="div-61158-0"><Link to={"/"} className="nav1">{`Главная`}</Link></span>
          </div>

          <div className="div-61159 pos-abs">
            <span className="div-61159-0"><Link to={"/space"} className="nav1">{`Космос и РК`}</Link></span>
          </div>

          <div className="div-61160 pos-abs">
            <span className="div-61160-0"><Link to={"/worldexperience"} className="nav1">{`Мировой опыт`}</Link></span>
          </div>

          <div className="div-61161 pos-abs">
            <span className="div-61161-0"><Link to={"/conclusion"} className="nav1">{`Заключение`}</Link></span>
          </div>

          <div className="div-61162 pos-abs">
            <span className="div-61162-0"><Link to={"/tourism"} className="nav1">{`Космотуризм`}</Link></span>
          </div>
        </section>
      </div>
    </div>
  );
};
export default WorldExperience;
