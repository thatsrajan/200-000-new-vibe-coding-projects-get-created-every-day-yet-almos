const strategies = [
  { name: 'Build an MCP server', developer: 9, workflow: 8, consumer: 3, idea: 7, mvp: 9, launched: 8, action: 'Expose one killer workflow so LLM tools can route users to you.' },
  { name: 'Ship templates and starter kits', developer: 8, workflow: 7, consumer: 4, idea: 9, mvp: 8, launched: 6, action: 'Turn the first successful use case into a reusable template.' },
  { name: 'Own a niche community', developer: 7, workflow: 8, consumer: 7, idea: 6, mvp: 8, launched: 9, action: 'Answer real questions in one forum where your buyers already hang out.' },
  { name: 'Record teardown content', developer: 6, workflow: 7, consumer: 8, idea: 7, mvp: 7, launched: 8, action: 'Show the product solving a real workflow, not just a UI demo.' },
  { name: 'Launch with calculators/checklists', developer: 5, workflow: 8, consumer: 9, idea: 8, mvp: 7, launched: 7, action: 'Give the market a no-login tool that leads into your main product.' },
];

document.getElementById('score').addEventListener('click', () => {
  const productType = document.getElementById('productType').value;
  const stage = document.getElementById('stage').value;
  const ranked = strategies
    .map(item => ({ ...item, total: item[productType] + item[stage] }))
    .sort((a, b) => b.total - a.total)
    .slice(0, 3);
  document.getElementById('results').innerHTML = ranked.map(item => `<div class="result"><strong>${item.name}</strong><div class="score">Score: ${item.total}/18</div><p>${item.action}</p></div>`).join('');
});
