/**
 * @swagger
 *  components:
 *    schemas:
 *      registLocation:
 *        type: object
 *        required:
 *          - name
 *          - email
 *        properties:
 *          registerID:
 *            type: string
 *            description: 등록한 유저 ID
 *          location:
 *            type: schema
 *            $ref: '#/components/schemas/user'
 *        example:
 *          registUserID: testUser
 *          locationInfo: 
 *              locationId: 26640200
 *              address: 제주특별자치도 서귀포시 안덕면 화순리 337-16
 *              x: 126.33581745833496
 *              y: 33.24646746966087
 *              camp:
 *                  region: coca
 *                  deliver:
 *                      coca: 10
 *                      pepsi: 1
 *                  store:
 *                      coca: 10
 *                      pepsi: 1
 *                  pickUP:
 *                      coca: 10
 *                      pepsi: 1
 *              create_date: 2021-02-03T18:39:39.000Z
 *              update_date: 2021-02-03T18:39:39.000Z
 */