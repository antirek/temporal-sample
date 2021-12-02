import express from 'express';
import { Connection, WorkflowClient } from '@temporalio/client';

import { example } from './workflows';


const app = express();
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.get('/', async (req, res) => {
  console.log('params get:', req.params, JSON.stringify(req.body));
  try {
    res.json({});
    await run();    
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});

app.post('/', async (req, res) => {
  console.log('params post:', req.params, JSON.stringify(req.body));
  try {
    res.json({});
    await run();    
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});

app.listen(8000, () => {
  console.log('started');
})

async function run() {
  console.log('start');
  const connection = new Connection(); // Connect to localhost with default ConnectionOptions.
  // In production, pass options to the Connection constructor to configure TLS and other settings.
  // This is optional but we leave this here to remind you there is a gRPC connection being established.

  const client = new WorkflowClient(connection.service, {
    // In production you will likely specify `namespace` here; it is 'default' if omitted
  });

  // Invoke the `example` Workflow, only resolved when the workflow completes
  const result = await client.start(example, {
    args: ['32'], // type inference works! args: [name: string]
    taskQueue: 'tutorial',
    workflowId: 'my-business-id' + Math.random(),
  //   cronSchedule: '*/3 * * * *',
  });

  console.log(result); // Hello, Temporal!
}

run().catch(err => {
  console.log(err); //
})