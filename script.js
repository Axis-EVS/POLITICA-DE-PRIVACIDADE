/**
 * GUESBAY LANDING PAGE SCRIPT
 * Handles mobile navigation, FAQ accordion, smooth scrolling,
 * interactive native dashboard showcase, dynamic day selection, and simulated explanation pop-ups.
 */

document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // 1. MOBILE MENU TOGGLE
  // =========================================================================
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      mobileToggle.classList.toggle('active');
    });

    // Close menu when clicking on any nav link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileToggle.classList.remove('active');
      });
    });
  }

  // =========================================================================
  // 2. FAQ ACCORDION
  // =========================================================================
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item, index) => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      // Open the first question by default
      if (index === 0) {
        item.classList.add('active');
      }

      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close other items
        faqItems.forEach(otherItem => {
          otherItem.classList.remove('active');
        });

        // Toggle clicked item
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // =========================================================================
  // 3. SMART ANDROID DEEP LINKING HELPER
  // =========================================================================
  const isAndroid = /android/i.test(navigator.userAgent || navigator.vendor || window.opera);
  const playStoreButtons = document.querySelectorAll('a[href*="play.google.com"]');

  playStoreButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (isAndroid) {
        const targetPackage = 'com.guesbay.app';
        const marketUrl = `market://details?id=${targetPackage}`;
        
        window.location.href = marketUrl;
        setTimeout(() => {
          window.location.href = `https://play.google.com/store/apps/details?id=${targetPackage}`;
        }, 800);
        e.preventDefault();
      }
    });
  });

  // =========================================================================
  // 4. INTERACTIVE SIMULATION POPUPS DATA & LOGIC
  // =========================================================================
  const simModalBackdrop = document.getElementById('simModalBackdrop');
  const simModalClose = document.getElementById('simModalClose');
  const simModalSecondaryBtn = document.getElementById('simModalSecondaryBtn');
  const simModalTag = document.getElementById('simModalTag');
  const simModalTitle = document.getElementById('simModalTitle');
  const simModalBody = document.getElementById('simModalBody');

  // Simulated content database matching Guesbay business logic
  const popupContents = {
    growth: {
      tag: '📈 Análise Comparativa Mês a Mês',
      title: 'Crescimento de +144.0% em Julho 2026',
      html: `
        <div class="sim-highlight-box">
          <div class="sim-big-stat">+144.0%</div>
          <div class="sim-stat-desc">Comparativo automático contra o mês anterior (Junho 2026).</div>
        </div>

        <div class="sim-calc-grid">
          <div class="sim-calc-item">
            <span class="sim-calc-label">Mês Anterior (Junho 2026)</span>
            <div class="sim-calc-val">R$ 3.043,85 <span style="font-size:0.75rem; color:#94A3B8;">(81 vendas)</span></div>
          </div>
          <div class="sim-calc-item">
            <span class="sim-calc-label">Mês Atual (Julho 2026)</span>
            <div class="sim-calc-val green">R$ 7.427,00 <span style="font-size:0.75rem; color:#34D399;">(198 vendas)</span></div>
          </div>
        </div>

        <h4 class="sim-section-title">📊 Resumo do Crescimento</h4>
        <p>Seu espaço aumentou <strong>+R$ 4.383,15</strong> em faturamento bruto e conquistou <strong>+117 atendimentos</strong> a mais em relação a Junho.</p>

        <div class="sim-tip-box">
          💡 <strong>Inteligência Guesbay:</strong> O aplicativo consolida seus dados financeiros em tempo real e calcula taxas de crescimento sem necessidade de planilhas.
        </div>
      `
    },
    revenue: {
      tag: '💰 Composição de Receita',
      title: 'Faturamento Total: R$ 7.427,00',
      html: `
        <div class="sim-highlight-box">
          <div class="sim-big-stat">R$ 7.427,00</div>
          <div class="sim-stat-desc">Soma de todas as vendas e consumos no período de Julho 2026.</div>
        </div>

        <h4 class="sim-section-title">📦 Origem do Faturamento</h4>
        <div class="sim-calc-grid">
          <div class="sim-calc-item">
            <span class="sim-calc-label">Venda Direta de Produtos</span>
            <div class="sim-calc-val green">R$ 4.890,00 <span style="font-size:0.72rem; color:#94A3B8;">(65.8%)</span></div>
          </div>
          <div class="sim-calc-item">
            <span class="sim-calc-label">Consumos & Acessos no Espaço</span>
            <div class="sim-calc-val green">R$ 2.537,00 <span style="font-size:0.72rem; color:#94A3B8;">(34.2%)</span></div>
          </div>
        </div>

        <h4 class="sim-section-title" style="margin-top:1rem;">💳 Formas de Pagamento Registradas</h4>
        <div class="sim-calc-grid">
          <div class="sim-calc-item">
            <span class="sim-calc-label">PIX / Dinheiro à Vista</span>
            <div class="sim-calc-val">R$ 5.210,00 <span style="font-size:0.72rem; color:#94A3B8;">(70.1%)</span></div>
          </div>
          <div class="sim-calc-item">
            <span class="sim-calc-label">Cartão de Crédito / Débito</span>
            <div class="sim-calc-val">R$ 2.217,00 <span style="font-size:0.72rem; color:#94A3B8;">(29.9%)</span></div>
          </div>
        </div>

        <div class="sim-tip-box">
          ⚡ <strong>Agilidade no Caixa:</strong> Registre cada venda em menos de 5 segundos no celular ou computador com baixa automática no estoque.
        </div>
      `
    },
    profit: {
      tag: '💎 Rentabilidade & Ficha Técnica',
      title: 'Lucro Líquido: R$ 4.625,78',
      html: `
        <div class="sim-highlight-box">
          <div class="sim-big-stat amber">R$ 4.625,78</div>
          <div class="sim-stat-desc">Lucro real e limpo no seu bolso após abater todos os custos de produtos e insumos.</div>
        </div>

        <h4 class="sim-section-title">🧪 Exemplo de Ficha Técnica (Shake Gourmet Trufado)</h4>
        <div class="sim-product-card">
          <div class="sim-product-header">
            <span class="sim-product-name">Shake Trufado Prestígio</span>
            <span class="sim-product-tag">Margem: 64.0%</span>
          </div>
          <div class="sim-calc-grid">
            <div class="sim-calc-item">
              <span class="sim-calc-label">Preço de Venda</span>
              <div class="sim-calc-val green">R$ 24,00</div>
            </div>
            <div class="sim-calc-item">
              <span class="sim-calc-label">Custo dos Insumos</span>
              <div class="sim-calc-val red">R$ 8,64</div>
            </div>
            <div class="sim-calc-item">
              <span class="sim-calc-label">Lucro Unitário Líquido</span>
              <div class="sim-calc-val amber">R$ 15,36</div>
            </div>
            <div class="sim-calc-item">
              <span class="sim-calc-label">PV Unitário Gerado</span>
              <div class="sim-calc-val">1.25 PV</div>
            </div>
          </div>
        </div>

        <h4 class="sim-section-title">🧮 Fechamento do Mês</h4>
        <div class="sim-calc-grid">
          <div class="sim-calc-item">
            <span class="sim-calc-label">Faturamento Total</span>
            <div class="sim-calc-val green">R$ 7.427,00</div>
          </div>
          <div class="sim-calc-item">
            <span class="sim-calc-label">Custo Total de Mercadorias</span>
            <div class="sim-calc-val red">- R$ 2.801,22</div>
          </div>
        </div>

        <div class="sim-tip-box">
          🎯 <strong>Controle de Insumos:</strong> Com a Calculadora de Receitas do Guesbay, você nunca mais vende sem saber sua margem de lucro exata.
        </div>
      `
    },
    ticket: {
      tag: '🎯 Indicador de Vendas',
      title: 'Ticket Médio: R$ 37,51',
      html: `
        <div class="sim-highlight-box">
          <div class="sim-big-stat">R$ 37,51 <span style="font-size:0.9rem; color:#94A3B8;">/ cliente</span></div>
          <div class="sim-stat-desc">Valor médio gasto por cada cliente em cada compra ou consumo no Espaço.</div>
        </div>

        <h4 class="sim-section-title">📐 Fórmula de Cálculo</h4>
        <div class="sim-product-card" style="text-align:center;">
          <p style="font-size:1.05rem; font-weight:700; color:#FFFFFF; margin-bottom:6px;">
            <span style="color:#34D399;">Faturamento (R$ 7.427,00)</span> ÷ <span style="color:#60A5FA;">198 Vendas</span>
          </p>
          <p style="color:#34D399; font-weight:800; font-size:1.25rem;">= R$ 37,51 por transação</p>
        </div>

        <h4 class="sim-section-title">🚀 Como aumentar seu Ticket Médio no Guesbay:</h4>
        <ul style="padding-left: 1.2rem; margin-bottom: 1rem; color:#CBD5E1; font-size:0.85rem; line-height:1.6;">
          <li><strong>Combos & Adicionais:</strong> Sugira caldas extras, bordas gourmet e shots de energia.</li>
          <li><strong>Venda Fechada:</strong> Ofereça potes de chá ou fibras para o cliente levar para casa.</li>
          <li><strong>Cartões Fidelidade:</strong> Incentive compras de pacotes semanais e mensais.</li>
        </ul>

        <div class="sim-tip-box">
          📈 <strong>Simulação de Impacto:</strong> Se você aumentar o ticket médio em apenas R$ 5,00, seu faturamento salta para <strong>R$ 8.417,00</strong> com os mesmos clientes!
        </div>
      `
    },
    margin: {
      tag: '⚖️ Rentabilidade do Negócio',
      title: 'Margem Média: 62%',
      html: `
        <div class="sim-highlight-box">
          <div class="sim-big-stat">62.3%</div>
          <div class="sim-stat-desc">Percentual de cada R$ 100,00 faturados que se transforma em lucro no seu bolso.</div>
        </div>

        <h4 class="sim-section-title">📐 Como é calculada</h4>
        <div class="sim-product-card" style="text-align:center;">
          <p style="font-size:1rem; font-weight:700; color:#FFFFFF; margin-bottom:6px;">
            (<span style="color:#FBBF24;">Lucro Líquido R$ 4.625,78</span> ÷ <span style="color:#34D399;">Faturamento R$ 7.427,00</span>) × 100
          </p>
          <p style="color:#34D399; font-weight:800; font-size:1.25rem;">= 62.28% de Margem Líquida</p>
        </div>

        <h4 class="sim-section-title">🏆 Termômetro de Saúde Financeira</h4>
        <div class="sim-calc-grid">
          <div class="sim-calc-item">
            <span class="sim-calc-label">Média do Mercado</span>
            <div class="sim-calc-val">50% a 58%</div>
          </div>
          <div class="sim-calc-item">
            <span class="sim-calc-label">Seu Desempenho</span>
            <div class="sim-calc-val green">62% (Excelente)</div>
          </div>
        </div>

        <div class="sim-tip-box">
          🛡️ <strong>Proteção de Preços:</strong> O Guesbay recalcula automaticamente a margem quando os preços dos fornecedores sofrem reajuste.
        </div>
      `
    },
    sales: {
      tag: '👥 Registro & CRM de Vendas',
      title: 'Vendas do Mês: 198 Registradas',
      html: `
        <div class="sim-highlight-box">
          <div class="sim-big-stat">198 Vendas</div>
          <div class="sim-stat-desc">Todas as transações registradas e sincronizadas na nuvem em Julho 2026.</div>
        </div>

        <h4 class="sim-section-title">🛒 Últimas Transações Registradas (Amostra)</h4>
        <table class="sim-table">
          <thead>
            <tr>
              <th>Cliente / Item</th>
              <th>Horário</th>
              <th>Valor</th>
              <th>Lucro</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Camila Duarte</strong><br><span style="font-size:0.72rem; color:#94A3B8;">1x Shake Trufado + Shot Thermojetics</span></td>
              <td>Hoje 15:40</td>
              <td style="color:#34D399; font-weight:700;">R$ 38,00</td>
              <td style="color:#FBBF24; font-weight:700;">R$ 24,50</td>
            </tr>
            <tr>
              <td><strong>Rodrigo Mendes</strong><br><span style="font-size:0.72rem; color:#94A3B8;">1x Shake Chocolate 550g (Pote)</span></td>
              <td>Hoje 14:15</td>
              <td style="color:#34D399; font-weight:700;">R$ 195,00</td>
              <td style="color:#FBBF24; font-weight:700;">R$ 78,00</td>
            </tr>
            <tr>
              <td><strong>Mariana Costa</strong><br><span style="font-size:0.72rem; color:#94A3B8;">1x Acesso Premium + Chá N-R-G</span></td>
              <td>Hoje 11:30</td>
              <td style="color:#34D399; font-weight:700;">R$ 29,00</td>
              <td style="color:#FBBF24; font-weight:700;">R$ 18,20</td>
            </tr>
            <tr>
              <td><strong>Lucas Silveira</strong><br><span style="font-size:0.72rem; color:#94A3B8;">1x Waffle Proteico + Shake Café</span></td>
              <td>Ontem 17:50</td>
              <td style="color:#34D399; font-weight:700;">R$ 42,00</td>
              <td style="color:#FBBF24; font-weight:700;">R$ 26,00</td>
            </tr>
            <tr>
              <td><strong>Fernanda Lima</strong><br><span style="font-size:0.72rem; color:#94A3B8;">2x Acesso Clássico + Fibras</span></td>
              <td>Ontem 12:10</td>
              <td style="color:#34D399; font-weight:700;">R$ 56,00</td>
              <td style="color:#FBBF24; font-weight:700;">R$ 35,10</td>
            </tr>
          </tbody>
        </table>

        <div style="text-align:center; padding:0.6rem 0; font-size:0.8rem; color:#94A3B8; font-weight:600;">
          + 193 outras vendas registradas e calculadas no período.
        </div>

        <div class="sim-tip-box">
          📱 <strong>CRM Integrado:</strong> Visualize o perfil de compra de cada cliente e envie mensagens de retenção personalizadas no WhatsApp com 1 clique.
        </div>
      `
    },
    goal: {
      tag: '🏆 Metas & Objetivos',
      title: 'Meta Mensal: 100% Atingida',
      html: `
        <div class="sim-highlight-box">
          <div class="sim-big-stat">185.6% <span style="font-size:0.9rem; color:#34D399;">Concluído</span></div>
          <div class="sim-stat-desc">Sua meta estipulada de R$ 4.000,00 foi batida com antecedência no dia 18!</div>
        </div>

        <h4 class="sim-section-title">🎯 Acompanhamento da Meta</h4>
        <div class="sim-calc-grid">
          <div class="sim-calc-item">
            <span class="sim-calc-label">Meta Definida</span>
            <div class="sim-calc-val">R$ 4.000,00</div>
          </div>
          <div class="sim-calc-item">
            <span class="sim-calc-label">Faturamento Realizado</span>
            <div class="sim-calc-val green">R$ 7.427,00</div>
          </div>
          <div class="sim-calc-item">
            <span class="sim-calc-label">Superávit Conquistado</span>
            <div class="sim-calc-val green">+ R$ 3.427,00</div>
          </div>
          <div class="sim-calc-item">
            <span class="sim-calc-label">Data da Conquista</span>
            <div class="sim-calc-val">18 de Julho (Dia 18)</div>
          </div>
        </div>

        <div class="sim-tip-box">
          🎉 <strong>Gamificação & Foco:</strong> Defina metas de faturamento, volume de PVs ou novos clientes e mantenha sua equipe motivada todos os dias.
        </div>
      `
    },
    day: {
      tag: '📅 Detalhamento Diário',
      title: 'Desempenho do Dia 20 de Julho',
      html: `
        <div class="sim-highlight-box">
          <div class="sim-big-stat">R$ 472,00 <span style="font-size:0.9rem; color:#FBBF24;">(Lucro: R$ 310,57)</span></div>
          <div class="sim-stat-desc">Pico de movimento com 12 atendimentos e alta margem de rentabilidade (65.8%).</div>
        </div>

        <h4 class="sim-section-title">📊 Números do Dia 20</h4>
        <div class="sim-calc-grid">
          <div class="sim-calc-item">
            <span class="sim-calc-label">Faturamento do Dia</span>
            <div class="sim-calc-val green">R$ 472,00</div>
          </div>
          <div class="sim-calc-item">
            <span class="sim-calc-label">Lucro Líquido do Dia</span>
            <div class="sim-calc-val amber">R$ 310,57</div>
          </div>
          <div class="sim-calc-item">
            <span class="sim-calc-label">Clientes / Atendimentos</span>
            <div class="sim-calc-val">12 vendas</div>
          </div>
          <div class="sim-calc-item">
            <span class="sim-calc-label">Margem do Dia</span>
            <div class="sim-calc-val green">65.8%</div>
          </div>
        </div>

        <h4 class="sim-section-title" style="margin-top:1rem;">🥤 Mais Vendidos no Dia 20</h4>
        <ul style="padding-left: 1.2rem; color:#CBD5E1; font-size:0.85rem; line-height:1.6;">
          <li><strong>Shake Trufado Pistache com Chocolate:</strong> 5 unidades vendidas</li>
          <li><strong>Combo Shake + Shot Thermojetics:</strong> 4 unidades vendidas</li>
          <li><strong>Pote Shake Baunilha 550g:</strong> 1 unidade vendida</li>
        </ul>

        <div class="sim-tip-box">
          👆 <strong>Navegação Interativa:</strong> Clique em qualquer barra do gráfico para auditar o movimento e o lucro de cada um dos 31 dias do mês!
        </div>
      `
    },
    fiscal: {
      tag: '📄 Automação Fiscal & XML',
      title: 'Importação XML de Notas Fiscais & DANFE NFC-e',
      html: `
        <div class="sim-highlight-box">
          <div class="sim-big-stat" style="color:#F59E0B;">Sincronização Fiscal em 1 Clique</div>
          <div class="sim-stat-desc">Importe arquivos XML de compras e emita cupons fiscais diretamente no Guesbay.</div>
        </div>

        <h4 class="sim-section-title">📦 Leitor Inteligente de XML</h4>
        <p>Ao receber pedidos dos seus fornecedores e distribuidores, basta fazer o upload do arquivo XML da NF-e no Guesbay. O sistema faz:</p>
        <ul style="padding-left: 1.2rem; margin: 0.75rem 0 1rem; color:#CBD5E1; font-size:0.85rem; line-height:1.6;">
          <li><strong>Leitura Automática:</strong> Identificação de todos os itens, códigos de barras e lotes.</li>
          <li><strong>Cálculo de PV:</strong> Soma automática de Pontos de Volume (PV) totais da nota e de cada produto.</li>
          <li><strong>Custo Real Atualizado:</strong> Atualização imediata do custo unitário para cálculo de lucro das receitas.</li>
        </ul>

        <h4 class="sim-section-title" style="margin-top:1rem;">🧾 Emissão de Cupom Fiscal & Recibo Oficial</h4>
        <div class="sim-calc-grid">
          <div class="sim-calc-item">
            <span class="sim-calc-label">DANFE NFC-e</span>
            <div class="sim-calc-val green">SEFAZ Autorizada</div>
          </div>
          <div class="sim-calc-item">
            <span class="sim-calc-label">Envio Digital</span>
            <div class="sim-calc-val">WhatsApp com QR Code</div>
          </div>
        </div>

        <div class="sim-tip-box">
          ⚡ <strong>Conformidade Total:</strong> Evite erros de digitação e retrabalho contábil com a automação fiscal oficial do Guesbay.
        </div>
      `
    },
    ultra: {
      tag: '👑 Potência Máxima & Lara Copilot',
      title: 'Plano ULTRA: 6x Mais IA e até 10 Sistemas',
      html: `
        <div class="sim-highlight-box">
          <div class="sim-big-stat" style="color:#C084FC;">Potência Máxima ULTRA</div>
          <div class="sim-stat-desc">Desenvolvido sob medida para donos de grandes Espaços e redes com múltiplos operadores.</div>
        </div>

        <h4 class="sim-section-title">⚡ Principais Diferenciais do Plano ULTRA</h4>
        <div class="sim-calc-grid">
          <div class="sim-calc-item">
            <span class="sim-calc-label">Sistemas Próprios</span>
            <div class="sim-calc-val" style="color:#E9D5FF;">Até 10 Sistemas</div>
          </div>
          <div class="sim-calc-item">
            <span class="sim-calc-label">Sistemas Compartilhados</span>
            <div class="sim-calc-val" style="color:#E9D5FF;">Até 20 Sistemas</div>
          </div>
          <div class="sim-calc-item">
            <span class="sim-calc-label">Assistente IA Lara</span>
            <div class="sim-calc-val" style="color:#C084FC;">6x Mais Cota Copilot</div>
          </div>
          <div class="sim-calc-item">
            <span class="sim-calc-label">Módulo Fiscal</span>
            <div class="sim-calc-val green">NFC-e & Leitor XML</div>
          </div>
        </div>

        <div class="sim-tip-box">
          💎 <strong>Exclusivo no App Android:</strong> Contrate com segurança pelo Google Play no seu smartphone e acesse todos os recursos no computador e celular!
        </div>
      `
    }
  };

  // Open simulation modal function
  function openSimModal(type, customData) {
    if (!simModalBackdrop || !simModalTitle || !simModalBody) return;

    let content = popupContents[type];

    // If it's a dynamic day clicked on chart
    if (type === 'day' && customData) {
      content = {
        tag: `📅 Detalhamento Diário • Dia ${customData.day}`,
        title: `Desempenho do Dia ${customData.day} de Julho`,
        html: `
          <div class="sim-highlight-box">
            <div class="sim-big-stat">R$ ${customData.fat.toFixed(2).replace('.', ',')} <span style="font-size:0.9rem; color:#FBBF24;">(Lucro: R$ ${customData.lucro.toFixed(2).replace('.', ',')})</span></div>
            <div class="sim-stat-desc">${customData.sales} atendimentos registrados com margem de ${customData.margin}%.</div>
          </div>

          <h4 class="sim-section-title">📊 Números do Dia ${customData.day}</h4>
          <div class="sim-calc-grid">
            <div class="sim-calc-item">
              <span class="sim-calc-label">Faturamento do Dia</span>
              <div class="sim-calc-val green">R$ ${customData.fat.toFixed(2).replace('.', ',')}</div>
            </div>
            <div class="sim-calc-item">
              <span class="sim-calc-label">Lucro Líquido do Dia</span>
              <div class="sim-calc-val amber">R$ ${customData.lucro.toFixed(2).replace('.', ',')}</div>
            </div>
            <div class="sim-calc-item">
              <span class="sim-calc-label">Atendimentos Realizados</span>
              <div class="sim-calc-val">${customData.sales} vendas</div>
            </div>
            <div class="sim-calc-item">
              <span class="sim-calc-label">Margem Efetiva</span>
              <div class="sim-calc-val green">${customData.margin}%</div>
            </div>
          </div>

          <div class="sim-tip-box">
            👆 <strong>Navegação Interativa:</strong> No Guesbay você pode auditar e exportar relatórios de qualquer dia, semana ou mês em PDF e Excel.
          </div>
        `
      };
    }

    if (content) {
      simModalTag.innerHTML = `<span class="badge-dot"></span> ${content.tag}`;
      simModalTitle.textContent = content.title;
      simModalBody.innerHTML = content.html;
      simModalBackdrop.classList.add('open');
      simModalBackdrop.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden'; // Lock scroll
    }
  }

  // Close simulation modal
  function closeSimModal() {
    if (!simModalBackdrop) return;
    simModalBackdrop.classList.remove('open');
    simModalBackdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (simModalClose) simModalClose.addEventListener('click', closeSimModal);
  if (simModalSecondaryBtn) simModalSecondaryBtn.addEventListener('click', closeSimModal);
  if (simModalBackdrop) {
    simModalBackdrop.addEventListener('click', (e) => {
      if (e.target === simModalBackdrop) {
        closeSimModal();
      }
    });
  }

  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && simModalBackdrop && simModalBackdrop.classList.contains('open')) {
      closeSimModal();
    }
  });

  // Attach click events to all elements with data-popup
  const popupTriggers = document.querySelectorAll('[data-popup]');
  popupTriggers.forEach(el => {
    el.addEventListener('click', (e) => {
      const popupType = el.getAttribute('data-popup');
      if (popupType) {
        openSimModal(popupType);
      }
    });
  });

  // =========================================================================
  // 5. DYNAMIC DAILY BAR CHART & DAY SELECTION
  // =========================================================================
  const dashBarsWrapper = document.getElementById('dashBarsWrapper');
  const activeDayNumber = document.getElementById('activeDayNumber');
  const activeDayFat = document.getElementById('activeDayFat');
  const activeDayLucro = document.getElementById('activeDayLucro');
  const dayPillClose = document.getElementById('dayPillClose');

  // Simulated 31 days data for July 2026
  const monthDaysData = [
    { day: 1, fat: 95.00, lucro: 60.00, height: 22, sales: 3, margin: 63.1 },
    { day: 2, fat: 120.00, lucro: 78.00, height: 26, sales: 4, margin: 65.0 },
    { day: 3, fat: 85.00, lucro: 52.00, height: 18, sales: 2, margin: 61.2 },
    { day: 4, fat: 190.00, lucro: 122.00, height: 38, sales: 6, margin: 64.2 },
    { day: 5, fat: 140.00, lucro: 88.00, height: 28, sales: 4, margin: 62.8 },
    { day: 6, fat: 380.00, lucro: 245.00, height: 75, sales: 10, margin: 64.5 },
    { day: 7, fat: 420.00, lucro: 270.00, height: 82, sales: 11, margin: 64.3 },
    { day: 8, fat: 280.00, lucro: 175.00, height: 55, sales: 7, margin: 62.5 },
    { day: 9, fat: 160.00, lucro: 98.00, height: 32, sales: 5, margin: 61.2 },
    { day: 10, fat: 210.00, lucro: 135.00, height: 42, sales: 6, margin: 64.3 },
    { day: 11, fat: 195.00, lucro: 120.00, height: 39, sales: 5, margin: 61.5 },
    { day: 12, fat: 240.00, lucro: 152.00, height: 48, sales: 7, margin: 63.3 },
    { day: 13, fat: 390.00, lucro: 250.00, height: 78, sales: 11, margin: 64.1 },
    { day: 14, fat: 180.00, lucro: 112.00, height: 36, sales: 5, margin: 62.2 },
    { day: 15, fat: 290.00, lucro: 185.00, height: 58, sales: 8, margin: 63.8 },
    { day: 16, fat: 310.00, lucro: 195.00, height: 62, sales: 9, margin: 62.9 },
    { day: 17, fat: 340.00, lucro: 215.00, height: 68, sales: 9, margin: 63.2 },
    { day: 18, fat: 410.00, lucro: 260.00, height: 80, sales: 11, margin: 63.4 },
    { day: 19, fat: 250.00, lucro: 160.00, height: 50, sales: 7, margin: 64.0 },
    { day: 20, fat: 472.00, lucro: 310.57, height: 94, sales: 12, margin: 65.8 }, // Selected default
    { day: 21, fat: 190.00, lucro: 120.00, height: 38, sales: 5, margin: 63.1 },
    { day: 22, fat: 110.00, lucro: 70.00, height: 22, sales: 3, margin: 63.6 },
    { day: 23, fat: 180.00, lucro: 115.00, height: 36, sales: 5, margin: 63.9 },
    { day: 24, fat: 220.00, lucro: 140.00, height: 44, sales: 6, margin: 63.6 },
    { day: 25, fat: 320.00, lucro: 205.00, height: 64, sales: 8, margin: 64.1 },
    { day: 26, fat: 440.00, lucro: 280.00, height: 86, sales: 12, margin: 63.6 },
    { day: 27, fat: 360.00, lucro: 230.00, height: 72, sales: 10, margin: 63.9 },
    { day: 28, fat: 130.00, lucro: 82.00, height: 26, sales: 4, margin: 63.1 },
    { day: 29, fat: 170.00, lucro: 108.00, height: 34, sales: 5, margin: 63.5 },
    { day: 30, fat: 230.00, lucro: 145.00, height: 46, sales: 6, margin: 63.0 },
    { day: 31, fat: 260.00, lucro: 165.00, height: 52, sales: 7, margin: 63.5 }
  ];

  let currentSelectedDay = 20;

  function updateSelectedDay(dayObj, triggerModal = false) {
    currentSelectedDay = dayObj.day;

    if (activeDayNumber) activeDayNumber.textContent = dayObj.day;
    if (activeDayFat) activeDayFat.textContent = `R$ ${dayObj.fat.toFixed(2).replace('.', ',')}`;
    if (activeDayLucro) activeDayLucro.textContent = `R$ ${dayObj.lucro.toFixed(2).replace('.', ',')}`;

    // Update active class on bar elements
    const allBars = document.querySelectorAll('.dash-bar-col');
    allBars.forEach(b => {
      const bDay = parseInt(b.getAttribute('data-day'), 10);
      if (bDay === dayObj.day) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });

    if (triggerModal) {
      openSimModal('day', dayObj);
    }
  }

  // Render bars into #dashBarsWrapper
  if (dashBarsWrapper) {
    dashBarsWrapper.innerHTML = '';
    
    monthDaysData.forEach(dayItem => {
      const col = document.createElement('div');
      col.className = `dash-bar-col ${dayItem.day === currentSelectedDay ? 'active' : ''}`;
      col.setAttribute('data-day', dayItem.day);
      col.title = `Dia ${dayItem.day}: Fat R$ ${dayItem.fat.toFixed(2).replace('.', ',')} | Lucro R$ ${dayItem.lucro.toFixed(2).replace('.', ',')}`;

      // Stack ratio: amber bottom is profit percentage (~63%), top green is remaining
      const profitRatio = (dayItem.lucro / dayItem.fat) * 100;
      const profitHeight = (dayItem.height * (profitRatio / 100)).toFixed(1);
      const costHeight = (dayItem.height - profitHeight).toFixed(1);

      col.innerHTML = `
        <div class="bar-segment-top" style="height: ${costHeight}%;"></div>
        <div class="bar-segment-bottom" style="height: ${profitHeight}%;"></div>
      `;

      col.addEventListener('click', (e) => {
        e.stopPropagation();
        updateSelectedDay(dayItem, true);
      });

      dashBarsWrapper.appendChild(col);
    });
  }

  // Day pill reset button
  if (dayPillClose) {
    dayPillClose.addEventListener('click', (e) => {
      e.stopPropagation();
      // Reset to Day 20 default
      const defaultDay = monthDaysData.find(d => d.day === 20);
      if (defaultDay) updateSelectedDay(defaultDay, false);
    });
  }

  // =========================================================================
  // 6. PLAN BENEFITS "SAIBA MAIS" EXPAND / COLLAPSE ACCORDION
  // =========================================================================
  const planExpandButtons = document.querySelectorAll('.plan-expand-btn');
  planExpandButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const card = btn.closest('.pricing-card');
      const targetCollapse = card ? card.querySelector('.plan-features-collapse') : null;
      const textSpan = btn.querySelector('span');

      if (targetCollapse) {
        const isCurrentlyOpen = targetCollapse.classList.contains('is-open');

        if (isCurrentlyOpen) {
          targetCollapse.classList.remove('is-open');
          btn.setAttribute('aria-expanded', 'false');
          if (textSpan) textSpan.textContent = 'Saiba mais';
        } else {
          targetCollapse.classList.add('is-open');
          btn.setAttribute('aria-expanded', 'true');
          if (textSpan) textSpan.textContent = 'Ver menos';
        }
      }
    });
  });

  console.log('Guesbay Landing Page & Interactive Dashboard Simulator initialized successfully.');
});
