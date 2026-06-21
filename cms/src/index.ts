export default {
  register(/* { strapi } */) {},

  async bootstrap({ strapi }: { strapi: any }) {
    const publicRole = await strapi
      .query('plugin::users-permissions.role')
      .findOne({ where: { type: 'public' } });

    if (!publicRole) {
      console.log('[VOLT Bharat] Public role not found, skipping permission setup');
      return;
    }

    const actionsToEnable = ['api::blog.blog.find', 'api::blog.blog.findOne'];

    for (const action of actionsToEnable) {
      const existing = await strapi
        .query('plugin::users-permissions.permission')
        .findOne({ where: { action, role: publicRole.id } });

      if (existing) {
        await strapi.query('plugin::users-permissions.permission').update({
          where: { id: existing.id },
          data: { enabled: true },
        });
        console.log('[VOLT Bharat] Enabled public permission:', action);
      }
    }
  },
};
