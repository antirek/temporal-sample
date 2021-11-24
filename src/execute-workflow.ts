import { Connection, WorkflowClient } from '@temporalio/client';
import { example } from './workflows';

async function run() {
  console.time('t1');
  console.time('t2');
  console.time('t3');

  const connection = new Connection(); // Connect to localhost with default ConnectionOptions.
  // In production, pass options to the Connection constructor to configure TLS and other settings.
  // This is optional but we leave this here to remind you there is a gRPC connection being established.
  console.timeEnd('t1');
  const client = new WorkflowClient(connection.service, {
    // In production you will likely specify `namespace` here; it is 'default' if omitted
  });
  console.timeEnd('t2');
  // Invoke the `example` Workflow, only resolved when the workflow completes
  const result = await client.execute(example, {
    args: ['sergey', '79135292926'], // type inference works! args: [name: string]
    taskQueue: 'tutorial',
    workflowId: 'my-business-id',
  });

  console.log(result); // Hello, Temporal!
  console.timeEnd('t3');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
