declare module 'value-objects' {
  type LanguageOption = {
    label: string; 
    value:string;
  };
  
  type Git = {
    id: number;
    name: string;
    full_name: string;
    owner: any;
    private: boolean;
    html_url: string;
    description: string;
    collaborators_url: string;
    language: string | null;
    forks_count: number;
    watchers_count: number;
    is_template: boolean;
    topics: string[];
    updated_at: string;
  };
}
