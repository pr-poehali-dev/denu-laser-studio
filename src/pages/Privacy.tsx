import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

export default function Privacy() {
  return (
    <div className="min-h-screen font-body text-denu-dark" style={{ background: "var(--denu-cream)" }}>
      <header className="py-5 border-b border-denu-pink/10 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-8 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display text-2xl font-semibold tracking-wide" style={{ color: "var(--denu-pink-deep)" }}>DENU</span>
            <span className="text-xs text-denu-dark/50 hidden sm:block font-body">лазерная эпиляция</span>
          </Link>
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-denu-dark/60 hover:text-denu-pink transition-colors">
            <Icon name="ArrowLeft" size={16} /> На главную
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 md:px-8 py-12">
        <h1 className="font-display text-3xl md:text-4xl font-semibold text-denu-dark mb-2">Политика обработки персональных данных</h1>
        <p className="text-denu-dark/50 mb-10">г. Рязань · действует с 14 июля 2026 г.</p>

        <div className="flex flex-col gap-8 text-denu-dark/80 leading-relaxed text-sm md:text-base">
          <p>
            Настоящая Политика определяет порядок обработки персональных данных Индивидуальным предпринимателем Мироновым Дмитрием Геннадьевичем (ОГРН 318774600210919, ИНН 623002789307), именуемым в дальнейшем «Оператор», в соответствии с требованиями Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных».
          </p>

          <section>
            <h2 className="font-display text-xl font-semibold text-denu-dark mb-3">1. Общие положения</h2>
            <p className="mb-2">1.1. Оператор обрабатывает персональные данные посетителей сайта и клиентов студии DENU на законной и справедливой основе, для достижения конкретных, заранее определённых и законных целей.</p>
            <p>1.2. Обработка персональных данных осуществляется с согласия субъекта персональных данных на обработку его персональных данных, а также в иных случаях, прямо предусмотренных законодательством РФ.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-denu-dark mb-3">2. Какие данные обрабатываются</h2>
            <p className="mb-2">2.1. При заполнении форм на сайте (заявка на запись, оффер для новых клиентов) Оператор получает и обрабатывает:</p>
            <p className="mb-1">— имя;</p>
            <p className="mb-1">— номер телефона;</p>
            <p className="mb-2">— комментарий к заявке (по желанию клиента).</p>
            <p>2.2. При первом визите и заполнении Анкеты-опросника дополнительно обрабатываются сведения о состоянии здоровья, необходимые для безопасного оказания услуг (наличие противопоказаний, принимаемые лекарственные препараты и иные факторы).</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-denu-dark mb-3">3. Цели обработки</h2>
            <p className="mb-1">3.1. Персональные данные обрабатываются в целях:</p>
            <p className="mb-1">— записи клиента на процедуру и связи с ним для подтверждения записи;</p>
            <p className="mb-1">— оказания услуг лазерной эпиляции надлежащего качества и безопасно;</p>
            <p className="mb-1">— информирования об акциях, специальных предложениях и новостях студии (при согласии клиента);</p>
            <p>— исполнения требований законодательства РФ.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-denu-dark mb-3">4. Правовые основания обработки</h2>
            <p>Обработка персональных данных осуществляется на основании согласия субъекта персональных данных, а также в связи с исполнением договора оказания услуг, стороной которого является субъект персональных данных (см. <Link to="/offer" className="text-denu-pink underline hover:no-underline">Публичную оферту</Link>).</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-denu-dark mb-3">5. Хранение и передача данных</h2>
            <p className="mb-2">5.1. Персональные данные хранятся не дольше, чем этого требуют цели их обработки, если иной срок хранения не установлен законодательством РФ или договором с субъектом персональных данных.</p>
            <p className="mb-2">5.2. Согласие на обработку персональных данных действует в течение срока исполнения договора, а также в течение 3 (трёх) лет с момента его прекращения в целях разрешения возможных споров и претензий.</p>
            <p>5.3. Оператор не передаёт персональные данные третьим лицам, за исключением случаев, прямо предусмотренных законодательством РФ, либо привлечения третьих лиц для оказания технических услуг (например, сервисов онлайн-записи и обработки заявок), необходимых для исполнения договора с клиентом.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-denu-dark mb-3">6. Защита персональных данных</h2>
            <p>Оператор принимает необходимые правовые, организационные и технические меры для защиты персональных данных от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения, а также от иных неправомерных действий третьих лиц.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-denu-dark mb-3">7. Права субъекта персональных данных</h2>
            <p className="mb-1">Субъект персональных данных вправе:</p>
            <p className="mb-1">— получать информацию, касающуюся обработки его персональных данных;</p>
            <p className="mb-1">— требовать уточнения, блокирования или уничтожения своих персональных данных в случае, если они являются неполными, устаревшими, неточными, незаконно полученными или не являются необходимыми для заявленной цели обработки;</p>
            <p>— в любой момент отозвать согласие на обработку персональных данных, направив письменное уведомление Оператору по контактам, указанным в разделе 9.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-denu-dark mb-3">8. Изменение Политики</h2>
            <p>Оператор вправе вносить изменения в настоящую Политику. Новая редакция Политики вступает в силу с момента её размещения на сайте, если иное не предусмотрено новой редакцией Политики.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-denu-dark mb-3">9. Контакты Оператора</h2>
            <div className="bg-white rounded-2xl border border-denu-pink/10 p-5 sm:p-6">
              <p className="font-semibold text-denu-dark mb-4">ИП Миронов Дмитрий Геннадьевич</p>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                <p><span className="text-denu-dark/50">Почтовый адрес:</span> 390000, г. Рязань, Краснорядская ул., д. 3</p>
                <p><span className="text-denu-dark/50">Телефон:</span> 8 (915) 604-83-74</p>
                <p><span className="text-denu-dark/50">E-mail:</span> dm953@yandex.ru</p>
                <p><span className="text-denu-dark/50">ИНН:</span> 623002789307</p>
                <p><span className="text-denu-dark/50">ОГРН ИП:</span> 318774600210919</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="py-6 px-4 border-t border-denu-pink/10 bg-white">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-denu-dark/40">
          <span>© 2026 · DENU, Рязань</span>
          <div className="flex items-center gap-4">
            <Link to="/offer" className="hover:text-denu-pink transition-colors">Оферта</Link>
            <Link to="/privacy" className="hover:text-denu-pink transition-colors">Политика данных</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
