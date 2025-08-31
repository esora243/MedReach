import { useSelector } from 'react-redux';
export default function AdminLogs() {
  const logs = useSelector((state) => state.logs.list);
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">操作ログ</h2>
      <ul>
        {logs.map(log => (
          <li key={log.id}>{log.timestamp} - {log.user} - {log.action}</li>
        ))}
      </ul>
    </div>
  );
}