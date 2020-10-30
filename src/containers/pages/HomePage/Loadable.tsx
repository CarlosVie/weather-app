/**
 * Asynchronously loads the component for OldPage
 */
import React from 'react';
import loadable from '../../../utils/loadable';
import { Spinner } from 'react-bootstrap';

// @ts-ignore
export default loadable(() => import('./components'), {
    fallback: <Spinner animation="grow" variant="dark"/>// change to a loading component
});
