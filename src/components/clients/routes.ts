import { Router } from 'express';
const router: Router = Router();

import controller from './controller';

router.route('/')
	.post(controller.create)
	.put(controller.update)
	.get(controller.getAll)

router.route('/:id')
	.delete(controller.delete)
	.get(controller.getOne)

export default router