declare module 'egg' {
  export interface Application {
      model: Sequelize.Sequelize;
  }
}

declare module "*.json" {
  const value: any;
  export default value;
 }