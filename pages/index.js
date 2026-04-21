import ParticlesBg from "../components/ParticlesBg";
import EquityGraph from "../components/EquityGraph";

export default function Home() {
  return (
    <div className="relative">

      {/* 粒子背景 */}
      <div className="absolute inset-0 -z-10">
        <ParticlesBg />
      </div>

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl font-bold mb-6">华智未来</h1>
        <p className="text-xl text-gray-400 max-w-2xl">
          从算力基础设施到AI技术服务商，构建可信智能未来
        </p>
      </section>

      {/* 公司介绍 */}
      <section className="py-20 px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">公司概述</h2>
        <p className="text-gray-400 leading-8">
          公司起步于算力贸易，逐步转型为AI技术服务商，
          构建B端行业解决方案与C端智能硬件双轮驱动战略。
        </p>
      </section>

      {/* 技术 */}
      <section className="py-20 bg-gray-900 px-8">
        <h2 className="text-3xl font-bold mb-6">灵言妙语大模型</h2>
        <ul className="text-gray-400 space-y-3">
          <li>70B参数 · 企业级部署</li>
          <li>私有化部署 · 数据安全</li>
          <li>低成本高性能</li>
          <li>行业可微调</li>
        </ul>
      </section>

      {/* 星辰项目 */}
      <section className="py-20 px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">星辰边缘智算集群</h2>
        <p className="text-gray-400">
          双核心 + 多级边缘 + 调度平台 · 总投资50亿 · 五年营收77.8亿
        </p>
      </section>

      {/* 股权结构 */}
      <section className="py-20 bg-gray-900 px-8">
        <h2 className="text-3xl font-bold text-center mb-10">股权结构</h2>
        <EquityGraph />
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">共建AI基础设施未来</h2>
        <p className="text-gray-400">欢迎合作与投资交流</p>
      </section>

    </div>
  );
}
