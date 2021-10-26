const titles = {
  panel: '⚙️ Панель управления',
};

export = {
  buttons: {
    phones: '📔 Номера',
    phones_upload_manual: '✏️ Ввести вручную',
    phones_upload_csv: '📁 Загрузить CSV файл',
    calling: '📞 Обзвон',
    stats: '📊 Статистика',
    consultant: '👨‍💼 Консультант',
    product: '🛒 Продукт',
  },
  messages: {
    panel:
      `${titles.panel}\n\n` +
      `<b>Информация о Zvonobot</b>\n` +
      `• Баланс: \${balance} руб.\n\n` +
      `<b>Последние действия в профиле</b>\n` +
      `• Платеж: \${lastPayAt}\n` +
      `• Авторизация: \${loggedAt}`,
  },
};
