const connection = require('../modules/connection');

class Car {
    constructor() {}

    //получение всех записей таблиц
    static async getAll() {
        try {

            const { rows } = await connection.query(
                `
                    SELECT
                        cars.id AS id, brands.name AS brand, models.name AS model, cars.price AS price, shops.name AS shop, shops.phone AS phone
                    FROM
                        cars
                    JOIN
                        models ON cars.model_id = models.id
                    JOIN
                        brands ON models.brand_id = brands.id
                    JOIN
                        shops ON cars.shop_id = shops.id;
                `
            )
            
            return rows;
        } catch(error) {
            console.log(error);
        }
    }

    //создание новой записи
    static async create(data) {
        try {
            await connection.query('BEGIN');
        
            // Вставка бренда
            const brandInsert = `
              INSERT INTO brands (name) VALUES ($1) 
              ON CONFLICT (name) DO NOTHING
              RETURNING id`;
            
            const brandRes = await connection.query(brandInsert, [data.brand]);
            const brandId = brandRes.rows[0]?.id || 
              (await connection.query('SELECT id FROM brands WHERE name = $1', [data.brand])).rows[0].id;
        
            // Вставка модели
            const modelInsert = `
              INSERT INTO models (brand_id, name) VALUES ($1, $2)
              ON CONFLICT (brand_id, name) DO NOTHING
              RETURNING id`;
            
            const modelRes = await connection.query(modelInsert, [brandId, data.model]);
            const modelId = modelRes.rows[0]?.id || 
              (await connection.query('SELECT id FROM models WHERE brand_id = $1 AND name = $2', 
                [brandId, data.model])).rows[0].id;
        
            // Вставка магазина
            const shopInsert = `
              INSERT INTO shops (name, phone) VALUES ($1, $2)
              ON CONFLICT (name, phone) DO NOTHING
              RETURNING id`;
            
            const shopRes = await connection.query(shopInsert, [data.shop, data.phone]);
            const shopId = shopRes.rows[0]?.id || 
              (await connection.query('SELECT id FROM shops WHERE name = $1 AND phone = $2', 
                [data.shop, data.phone])).rows[0].id;
        
            // Вставка автомобиля
            const carInsert = `
              INSERT INTO cars (model_id, shop_id, price) VALUES ($1, $2, $3)`;
            
            await connection.query(carInsert, [modelId, shopId, data.price]);
        
            await connection.query('COMMIT');
            console.log('Данные успешно добавлены');
        } catch (error) {
            await connection.query('ROLLBACK');
            console.error('Ошибка при добавлении данных:', error);
            throw error;
        } finally {
            return data;
        }
    }
}

module.exports = Car;