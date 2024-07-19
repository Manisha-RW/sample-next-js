import { createClient } from "@prismicio/client";
import sm from "./slicemachine.config.json" assert { type: 'json' };

const nextConfig = async () => {
    const client = createClient(sm.repositoryName);
  
    const { languages } = await client.getRepository();
    const locales = languages.map((lang) => lang.id);
  
    const defaultLocale = languages.find(({ is_master }) => is_master).id;
  
    return {
      i18n: { locales, defaultLocale: defaultLocale, localeDetection: false },
      // Other configuration
    };
  };
export default nextConfig;