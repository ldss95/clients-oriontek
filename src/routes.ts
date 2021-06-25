import { Router } from 'express';
const router: Router = Router();

import clients from './components/clients/routes';

router.use('/clients', clients);

export default router